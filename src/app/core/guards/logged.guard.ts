/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Route, Router, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { first, map, Observable, lastValueFrom } from "rxjs";
import { GlobalStateReducersList } from "../state/constants/state.constants";
import { GlobalState } from "../state/app.state";

@Injectable({
  providedIn: "root",
})
export class LoggedGuard  {
  token = "";

  constructor(private routes: Router, private store: Store<GlobalState>) {}

  canLoad(
    route: Route
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.isLogged(route, undefined);
  }

  canActivate(
    _route: ActivatedRouteSnapshot,
    state: any
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isLogged(undefined, state);
  }

  async isLogged(route?: Route, state?: any): Promise<boolean | UrlTree> {
    const token = await lastValueFrom(
      this.store.select(GlobalStateReducersList.AUTHENTICATION).pipe(
        first(),
        map((userStore) => userStore?.user?.accessToken || "")
      )
    );

    // LOGIN
    const loginPath1 = route?.path === "auth";
    let loginPath2 = false;
    let loginPath3 = false;

    if (state) {
      loginPath2 = !!state.url && state.url.startsWith("/auth");
      loginPath3 = state[0] && state[0]["path"].startsWith("auth");
    }

    if (loginPath1 || loginPath2 || loginPath3)
      return token ? this.routes.createUrlTree(["/home"]) : true;

    // ANOTHER ROUTES
    return token ? true : this.routes.createUrlTree(["/auth"]);
  }
}
