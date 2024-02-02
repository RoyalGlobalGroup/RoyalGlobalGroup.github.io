import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { lastValueFrom } from "rxjs";

import { AuthFunctions } from "../auth.functions";
import { RolesAccount } from "../constants/auth.constant";
import { IUserState } from "../interfaces/auth.interfaces";

describe("AuthFunctions", () => {
  let service: AuthFunctions;
  let store: MockStore<IUserState>;
  const mockRouter = { navigate: jasmine.createSpy("navigate") };
  const WindowMock = {
    location: { href: "" },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: "Window", useValue: WindowMock },
        provideMockStore(),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    service = TestBed.inject(AuthFunctions);
    store = TestBed.inject(MockStore);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("logout service called MOBILE", () => {
    window.innerWidth = 950;

    const storeSpy = spyOn(store, "dispatch").and.callThrough();
    service.logout();

    expect(storeSpy).toHaveBeenCalled();
    expect(storeSpy).toHaveBeenCalledTimes(2);
  });

  it("logout service called DESKTOP", () => {
    window.innerWidth = 1000;

    const storeSpy = spyOn(store, "dispatch").and.callThrough();
    service.logout();

    expect(storeSpy).toHaveBeenCalled();
    expect(storeSpy).toHaveBeenCalledTimes(2);
  });

  it("getTokenStore exists", async () => {
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

    const storeSpy = spyOn(store, "select").and.callThrough();

    const token = await lastValueFrom(service.getTokenFromStore());

    expect(storeSpy).toHaveBeenCalledTimes(1);
    expect(token).toBeDefined();
  });

  it("getTokenStore not exists", async () => {
    const nextState: IUserState = {
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

    store.setState(nextState);

    const storeSpy = spyOn(store, "select").and.callThrough();

    const tokens = await lastValueFrom(service.getTokenFromStore());

    expect(storeSpy).toHaveBeenCalledTimes(1);
    expect(tokens).toBeDefined();
  });

  it("get Token EXISTS", async () => {
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

    const token = await service.getToken();

    expect(token).toEqual(nextState.authentication.user.accessToken);
  });

  it("get Token no exists", async () => {
    const nextState: IUserState = {
      authentication: {
        user: {
          name: "Test",
          email: "mailTest@gmail.com",
          phone: "+5411557788",
          accessToken: "",
          role: RolesAccount.USER_ROL,
        },
      },
    };

    store.setState(nextState);

    const token = await service.getToken();
    expect(token).toEqual("");
  });
});
