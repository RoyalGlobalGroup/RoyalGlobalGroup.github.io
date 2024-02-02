/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import {
  ActivatedRouteSnapshot,
  Route,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { of } from "rxjs";
import { IUserState } from "src/app/pages/auth/interfaces/auth.interfaces";
import { LoggedGuard } from "../logged.guard";
import { RolesAccount } from "../../../pages/auth/constants/auth.constant";

describe("LoggedGuard", () => {
  let guard: LoggedGuard;
  let store: MockStore<IUserState>;
  let routeSnap: ActivatedRouteSnapshot;
  let stateSnap: RouterStateSnapshot;

  const defaultState: IUserState = {
    authentication: {
      user: {
        name: "",
        email: "",
        phone: "",
        accessToken: "",
        role: RolesAccount.USER_ROL,
      },
    },
  };

  beforeEach(() => {
    const routerStub = {
      events: of("/"),
      createUrlTree: () => {},
    };
    const routeSnapShot = {
      snapshot: { params: { id: "" } },
    };
    const stateSnapShot = {
      snapshot: { params: { id: "" } },
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        provideMockStore({
          initialState: defaultState,
        }),
        { provide: Router, useValue: routerStub },
        { provide: ActivatedRouteSnapshot, useValue: routeSnapShot },
        { provide: RouterStateSnapshot, useValue: stateSnapShot },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    guard = TestBed.inject(LoggedGuard);
    store = TestBed.inject(MockStore);
    routeSnap = TestBed.inject(ActivatedRouteSnapshot);
    stateSnap = TestBed.inject(RouterStateSnapshot);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });

  it("can Activate to be True ", () => {
    const storeSpy = spyOn(store, "select").and.callThrough();
    guard.canActivate(routeSnap, stateSnap);
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });

  it("validate user is Logged", async () => {
    const nextState: IUserState = {
      authentication: {
        user: {
          name: "Test",
          email: "mailTest@gmail.com",
          phone: "+5411557788",
          accessToken: "asfksakmfaskmfsakm",
          role: RolesAccount.USER_ROL,
        },
      },
    };

    store.setState(nextState);

    const isLogged = await guard.isLogged(undefined, stateSnap);

    expect(isLogged).toBeTrue();
  });

  it("user is not logged", async () => {
    const nextState: IUserState = {
      authentication: {
        user: {
          name: "",
          email: "",
          phone: "",
          role: RolesAccount.USER_ROL,
          accessToken: "",
        },
      },
    };

    store.setState(nextState);
    const isLogged = await guard.isLogged(undefined, stateSnap);

    expect(isLogged).toBeUndefined();
  });

  it("user is logged,but cant access home ", async () => {
    const nextState: IUserState = {
      authentication: {
        user: {
          name: "",
          email: "",
          phone: "",
          role: RolesAccount.USER_ROL,
          accessToken: "",
        },
      },
    };

    const newSnapState: RouterStateSnapshot = stateSnap;
    newSnapState.url = "/auth";
    const nuevoState = [{ path: "auth" }, newSnapState];

    store.setState(nextState);

    const isLogged = await guard.isLogged(undefined, nuevoState);

    expect(isLogged).toBeTrue();
  });

  it("user is not logged and wants to go home", async () => {
    const nextState: IUserState = {
      authentication: {
        user: {
          name: "Test",
          email: "mailTest@gmail.com",
          phone: "+5411557788",
          accessToken: "asfksakmfaskmfsakm",
          role: RolesAccount.USER_ROL,
        },
      },
    };

    const newSnapState: RouterStateSnapshot = stateSnap;
    newSnapState.url = "/auth";
    store.setState(nextState);

    const isLogged = await guard.isLogged(undefined, newSnapState);

    expect(isLogged).toBeUndefined();
  });

  it("can canLoad to be True ", () => {
    const storeSpy = spyOn(store, "select").and.callThrough();

    const route: Route = {
      path: "",
    };

    guard.canLoad(route);

    expect(storeSpy).toHaveBeenCalledTimes(1);
  });
});
