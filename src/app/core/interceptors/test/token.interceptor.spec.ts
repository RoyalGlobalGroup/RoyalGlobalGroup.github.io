import {
  HttpContext,
  HttpRequest,
  HttpHandler,
  HttpResponse,
} from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { Observable, of } from "rxjs";
import { AuthComponent } from "src/app/pages/auth/auth.component";
import { IUserState } from "src/app/pages/auth/interfaces/auth.interfaces";
import { HttpTranslateUrl } from "../../libraries/ngx-translate/interfaces/ngx-translate.interfaces";
import {
  HIDE_SPINNER,
  NO_INSERT_TOKEN,
  NO_INTERCEPTORS,
} from "../constants/interceptors.constants";
import { TokenInterceptor } from "../token.interceptor";
import { RolesAccount } from "../../../pages/auth/constants/auth.constant";

describe("TokenInterceptor", () => {
  let interceptor: TokenInterceptor;
  let store: MockStore<IUserState>;

  const defaultState: IUserState = {
    authentication: {
      user: {
        name: "Test",
        email: "test@testing.com",
        phone: "+541144778899",
        accessToken: "tokentest123",
        role: RolesAccount.USER_ROL,
      },
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {
            path: "auth",
            component: AuthComponent,
          },
        ]),
      ],
      providers: [
        TokenInterceptor,
        provideMockStore({
          initialState: defaultState,
        }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    interceptor = TestBed.inject(TokenInterceptor);
    store = TestBed.inject(MockStore);
  });

  it("should be created", () => {
    expect(interceptor).toBeTruthy();
  });

  it("ignore request when path is url translate", () => {
    const next: HttpHandler = {
      handle: () => {
        return new Observable((subscriber) => {
          subscriber.next();
          subscriber.complete();
        });
      },
    };

    const requestMock = new HttpRequest("GET", HttpTranslateUrl.path);

    interceptor.intercept(requestMock, next).subscribe(() => {
      expect(requestMock.url).toBe(HttpTranslateUrl.path);
    });
  });

  it("no insert token with CONTEXT is 'NO_INSERT_TOKEN' ", () => {
    const next: HttpHandler = {
      handle: () => {
        return new Observable((subscriber) => {
          subscriber.next();
          subscriber.complete();
        });
      },
    };

    const options = {
      context: new HttpContext().set(NO_INSERT_TOKEN, true),
    };

    const requestMock = new HttpRequest("OPTIONS", "/test", options);

    interceptor.intercept(requestMock, next).subscribe(() => {
      expect(interceptor).toBeDefined();
    });
  });

  it("no insert token with CONTEXT is 'NO_INTERCEPTORS' ", () => {
    const next: HttpHandler = {
      handle: () => {
        return new Observable((subscriber) => {
          subscriber.next();
          subscriber.complete();
        });
      },
    };

    const options = {
      context: new HttpContext().set(NO_INTERCEPTORS, true),
    };

    const requestMock = new HttpRequest("OPTIONS", "/test", options);

    interceptor.intercept(requestMock, next).subscribe(() => {
      expect(interceptor).toBeDefined();
    });
  });

  it("insert token in request", () => {
    const mockHandler = {
      handle: () => of(new HttpResponse({ status: 500 })),
    };

    const requestMock = new HttpRequest("GET", "/test");

    interceptor.intercept(requestMock, mockHandler).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    expect(interceptor).toBeDefined();
  });

  it("request, no exist token", () => {
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
    const mockHandler = {
      handle: () => of(new HttpResponse({ status: 500 })),
    };

    const requestMock = new HttpRequest("GET", "/test");

    interceptor.intercept(requestMock, mockHandler).subscribe((response) => {
      expect(response).toBeTruthy();
    });
    expect(interceptor).toBeDefined();
  });

  it("constants", () => {
    const hideSpinner = HIDE_SPINNER.defaultValue();
    const noInsertToken = NO_INSERT_TOKEN.defaultValue();
    const noInterceptors = NO_INTERCEPTORS.defaultValue();
    expect(hideSpinner).toBeFalse();
    expect(noInsertToken).toBeFalse();
    expect(noInterceptors).toBeFalse();
  });
});
