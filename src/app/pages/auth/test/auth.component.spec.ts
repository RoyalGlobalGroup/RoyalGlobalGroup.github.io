import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AuthComponent } from "../auth.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "../../../shared/shared.module";
import { IUserState } from "../interfaces/auth.interfaces";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HomeComponent } from "../../home/home.component";
import { AuthApi } from "../auth.api";
import { MessageService } from "primeng/api";
import { ErrorsManager } from "../../../core/errors/errors.manager";
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { of, throwError } from "rxjs";
import { ISessionResponse } from "../interfaces/auth.responses";

describe("AuthComponent", () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let store: MockStore<IUserState>;
  let service: AuthApi;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {
            path: "home",
            component: HomeComponent,
          },
        ]),
        TranslateModule.forRoot(),
        SharedModule,
      ],
      providers: [AuthApi, MessageService, ErrorsManager, provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [AuthComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    service = fixture.debugElement.injector.get(AuthApi);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("signUp", () => {
    const mockResponse: ISessionResponse = {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmF0aW9uIjoiMjAyNC0wMS0wNlQxNzozMTo1Ni44MThaIiwibmFtZSI6IkRpZWdvIEZlcnJlciIsInJvbGUiOiJVU0VSX0VNSVNTQVJZIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwicGhvbmUiOiIrMTEyMjMzNDQ1NTY2IiwiY291bnRyeSI6IkFyZ2VudGluYSJ9.0v_qorr51bj-4RxWRZY7G9DvvFVvSSaIwG8aKErM6jQ",
    };

    component.authForm.get("name")?.setValue("Example Name");
    component.authForm.get("email")?.setValue("example@testing.com");
    component.authForm.get("phone")?.setValue("+5491155889966"),
    component.authForm.get("password")?.setValue("pass1233");

    const spy = spyOn(service, "signUp").and.callFake(() => {
      return of(mockResponse.token);
    });

    const storeSpy = spyOn(store, "dispatch").and.callThrough();

    component.signUp();

    expect(component.authForm.valid).toBeTrue();
    expect(spy).toHaveBeenCalled();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });

  it("signUp error", () => {
    component.authForm.get("name")?.setValue("Example Name");
    component.authForm.get("email")?.setValue("example@testing.com");
    component.authForm.get("phone")?.setValue("+5491155889966"),
      component.authForm.get("password")?.setValue("pass1233");

    const spy = spyOn(service, "signUp").and.returnValue(
      throwError(() => new Error("test"))
    );

    component.signUp();

    expect(spy).toHaveBeenCalled();
  });

  it("signIn", () => {
    const mockResponse: ISessionResponse = {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmF0aW9uIjoiMjAyNC0wMS0wNlQxNzozMTo1Ni44MThaIiwibmFtZSI6IkRpZWdvIEZlcnJlciIsInJvbGUiOiJVU0VSX0VNSVNTQVJZIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwicGhvbmUiOiIrMTEyMjMzNDQ1NTY2IiwiY291bnRyeSI6IkFyZ2VudGluYSJ9.0v_qorr51bj-4RxWRZY7G9DvvFVvSSaIwG8aKErM6jQ",
    };

    component.authForm.get("email")?.setValue("example@testing.com"),
      component.authForm.get("password")?.setValue("pass1233");

    const spy = spyOn(service, "signIn").and.callFake(() => {
      return of(mockResponse.token);
    });

    const storeSpy = spyOn(store, "dispatch").and.callThrough();

    component.signIn();

    expect(component.authForm.get("email")?.valid).toBeTrue();
    expect(component.authForm.get("password")?.valid).toBeTrue();
    expect(spy).toHaveBeenCalled();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });

  it("signUp error", () => {
    component.authForm.get("email")?.setValue("example@testing.com");
    component.authForm.get("password")?.setValue("pass1233");

    const spy = spyOn(service, "signIn").and.returnValue(
      throwError(() => new Error("test"))
    );

    component.signIn();

    expect(spy).toHaveBeenCalled();
  });

  it("Remove spaces for email input", () => {
    component.authForm.get("email")?.setValue(" exa mple@testing.com ");
    component.onChangeInput();
    expect(
      component.authForm.get("email")?.value === "example@testing.com"
    ).toBe(true);
  });

  it("Enter event for signUp", () => {
    const keyboardEvent: KeyboardEvent = new KeyboardEvent("keydown", {
      keyCode: 86,
      metaKey: true,
    });

    const spy = spyOn(component, "removeSpacesInEmailInput").and.callThrough();
    component.removeSpaces(keyboardEvent);

    setTimeout(() => {
      expect(spy).toHaveBeenCalledTimes(0);
    }, 11);
  });
});
