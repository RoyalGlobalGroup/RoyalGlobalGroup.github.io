import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { from, lastValueFrom, Observable } from "rxjs";
import {
  NO_INSERT_TOKEN,
  NO_INTERCEPTORS,
} from "./constants/interceptors.constants";
import { HttpTranslateUrl } from "../libraries/ngx-translate/interfaces/ngx-translate.interfaces";
import { AuthFunctions } from "../../pages/auth/auth.functions";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authFunctions: AuthFunctions) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // if is the HttpTranslate,ignore interceptor
    if (request.url.includes(HttpTranslateUrl.path))
      return next.handle(request);

    // No insert Token
    if (
      request.context.get(NO_INSERT_TOKEN) === true ||
      request.context.get(NO_INTERCEPTORS) === true
    ) {
      return next.handle(request);
    }

    return from(this.requestWithToken(request, next));
  }

  async requestWithToken(request: HttpRequest<unknown>, next: HttpHandler) {
    const token = await this.authFunctions.getToken();

    if (!token) return lastValueFrom(next.handle(request));

    const requestWithHeader = request.clone({
      headers: request.headers.set("Authorization", `Bearer ${token}`),
    });

    return lastValueFrom(next.handle(requestWithHeader));
  }
}
