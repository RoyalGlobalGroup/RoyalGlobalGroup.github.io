import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from "@angular/common/http";
import { HttpTranslateUrl } from "../libraries/ngx-translate/interfaces/ngx-translate.interfaces";
import { GlobalState } from "../state/app.state";
import { Store } from "@ngrx/store";
import {
  HIDE_SPINNER,
  NO_INTERCEPTORS,
} from "./constants/interceptors.constants";
import { filter, finalize, Observable, tap } from "rxjs";

// Actions
import * as loaderActions from "../state/reducers/loader/loader.actions";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  count = 0;

  constructor(private store: Store<GlobalState>) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // if is the HttpTranslate,ignore interceptor
    if (request.url.includes(HttpTranslateUrl.path))
      return next.handle(request);

    // hide spinner for this request
    if (
      request.context.get(HIDE_SPINNER) === true ||
      request.context.get(NO_INTERCEPTORS) === true
    ) {
      return next.handle(request);
    }

    this.count++;
    return next.handle(request).pipe(
      tap(() => this.show()),
      filter((event) => event instanceof HttpResponse),
      finalize(() => {
        this.count--;
        this.count == 0 && this.hide();
      })
    );
  }

  show() {
    this.store.dispatch(loaderActions.isLoading());
  }

  hide() {
    this.store.dispatch(loaderActions.stopLoading());
  }
}
