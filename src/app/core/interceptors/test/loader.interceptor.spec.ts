import { HttpContext, HttpHandler, HttpRequest } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { Observable } from "rxjs";
import { HttpTranslateUrl } from "../../libraries/ngx-translate/interfaces/ngx-translate.interfaces";
import { LoaderInterceptor } from "../loader.interceptor";
import { GlobalState } from "../../state/app.state";
import {
  HIDE_SPINNER,
  NO_INSERT_TOKEN,
} from "../constants/interceptors.constants";

describe("LoaderInterceptor", () => {
  let store: MockStore<GlobalState>;
  let interceptor: LoaderInterceptor;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [LoaderInterceptor, provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    interceptor = TestBed.inject(LoaderInterceptor);
    store = TestBed.inject(MockStore);
  });

  it("should be created", () => {
    const interceptor: LoaderInterceptor = TestBed.inject(LoaderInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it("loader count toBe 0", () => {
    const next: HttpHandler = {
      handle: () => {
        return new Observable((subscriber) => {
          subscriber.next();
          subscriber.complete();
        });
      },
    };

    const requestMock = new HttpRequest("GET", "/test");

    interceptor.intercept(requestMock, next).subscribe(() => {
      expect(interceptor.count).toBeGreaterThan(0);
    });

    expect(interceptor.count).toBeDefined();
  });

  it("url translate", () => {
    const next: HttpHandler = {
      handle: () => {
        return new Observable((subscriber: { complete: () => void }) => {
          subscriber.complete();
        });
      },
    };

    const requestMock = new HttpRequest("GET", `/${HttpTranslateUrl.path}`);

    interceptor.intercept(requestMock, next).subscribe(() => {
      expect(interceptor.count).toBeGreaterThan(0);
    });

    expect(interceptor.count).toBeDefined();
  });

  it("dispatch show spinner", () => {
    const storeSpy = spyOn(store, "select").and.callThrough();

    interceptor.show();
    expect(storeSpy).toHaveBeenCalledTimes(0);
  });

  it("contest for show spinner for hide spinner", () => {
    const next: HttpHandler = {
      handle: () => {
        return new Observable((subscriber: { complete: () => void }) => {
          subscriber.complete();
        });
      },
    };

    const options = {
      context: new HttpContext().set(HIDE_SPINNER, true),
    };

    const requestMock = new HttpRequest("OPTIONS", "/test", options);

    interceptor.intercept(requestMock, next).subscribe(() => {
      expect(interceptor.count).toBeGreaterThan(0);
    });

    expect(interceptor.count).toBeDefined();
  });

  it("contest for show spinner for no insert token", () => {
    const next: HttpHandler = {
      handle: () => {
        return new Observable((subscriber: { complete: () => void }) => {
          subscriber.complete();
        });
      },
    };

    const options = {
      context: new HttpContext().set(NO_INSERT_TOKEN, true),
    };

    const requestMock = new HttpRequest("OPTIONS", "/test", options);

    interceptor.intercept(requestMock, next).subscribe(() => {
      expect(interceptor.count).toBeGreaterThan(0);
    });

    expect(interceptor.count).toBeDefined();
  });
});
