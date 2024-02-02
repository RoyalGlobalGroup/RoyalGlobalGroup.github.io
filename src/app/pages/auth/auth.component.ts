import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LayoutManager } from "../../core/layout/layout.manager";
import {
  RegexValidator,
  RegexConstants,
} from "../../shared/utils/validators/inputs.validators";
import {
  ICheckInvalidInput,
  IuserSignup,
  ITokenDecoded,
  IUser,
  IuserSignin,
} from "./interfaces/auth.interfaces";
import { ErrorsManager } from "../../core/errors/errors.manager";
import { Router } from "@angular/router";
import { AuthApi } from "./auth.api";
import { HttpErrorResponse } from "@angular/common/http";
import jwt_decode from "jwt-decode";
import { GlobalState } from "../../core/state/app.state";
import { Store } from "@ngrx/store";

// Actions
import * as userActions from "./state/authentication.actions";

@Component({
  selector: "appNeo-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit, OnDestroy {
  authForm!: FormGroup;
  hasAnAccount = false;

  // Invalid inputs
  invalidInputs: ICheckInvalidInput = {
    nameInput: false,
    phoneInput: false,
    emailInput: false,
    passwordInput: false,
  };

  constructor(
    private layoutManager: LayoutManager,
    private errorsManager: ErrorsManager,
    private store: Store<GlobalState>,
    private authApi: AuthApi,
    private route: Router
  ) {
    this.layoutManager.disableAllComponents();
    // this.layoutManager.toggleMenuComponent(true);
  }

  //------------------------[LIFE CYCLES COMPONENT]------------------
  ngOnInit(): void {
    this.createForm();
  }

  ngOnDestroy(): void {
    this.layoutManager.disableAllComponents();
  }
  /////////////////////////////////////////////////////////////////////////
  //-------------[FORMS]-----------

  createForm(): void {
    this.authForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required]),
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        RegexValidator(RegexConstants.REGEX),
      ]),
      password: new FormControl("", [Validators.required]),
    });
  }

  removeSpaces(event: KeyboardEvent): void {
    if ((event.ctrlKey || event.metaKey) && event.keyCode == 86) {
      setTimeout(() => {
        this.removeSpacesInEmailInput();
      }, 10);
    }
  }

  removeSpacesInEmailInput(): void {
    const email = this.authForm.get("email");
    if (email) email.setValue(email.value.replace(/\s+/g, ""));
  }

  onChangeInput(): void {
    this.removeSpacesInEmailInput();
  }

  /////////////////////////////////////////////////////////////////////////
  //-------------[APIs]-----------
  signUp(): void {
    if (this.authForm.valid) {
      const formValue = this.authForm.value;

      const userRequest: IuserSignup = {
        name: formValue.name,
        email: formValue.email,
        phone: formValue.phone,
        password: formValue.password,
      };

      this.authApi.signUp(userRequest).subscribe({
        next: (token) => this.manageSession(token),
        error: (response: HttpErrorResponse) =>
          this.errorsManager.manageError(response),
      });
    }
  }

  signIn(): void {
    const inputEmailValid = this.authForm.get("email");
    const inputPasswordValid = this.authForm.get("password");

    if (inputEmailValid?.valid && inputPasswordValid?.valid) {
      const userRequest: IuserSignin = {
        email: inputEmailValid.value,
        password: inputPasswordValid.value,
      };

      this.authApi.signIn(userRequest).subscribe({
        next: (token) => this.manageSession(token),
        error: (response: HttpErrorResponse) => {
          this.errorsManager.manageError(response);
        },
      });
    }
  }

  manageSession(token: string): void {
    const tokenDecoded: ITokenDecoded = jwt_decode(token);

    const authentication: IUser = {
      name: tokenDecoded.name,
      email: tokenDecoded.email,
      phone: tokenDecoded.phone,
      role: tokenDecoded.role,
      accessToken: token,
    };

    // Save state of user
    this.store.dispatch(userActions.setUser({ authentication }));

    // Go to home
    this.route.navigate(["home"]);
  }
}
