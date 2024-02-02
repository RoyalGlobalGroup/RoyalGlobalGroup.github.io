import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalState } from "../../core/state/app.state";
import { Store } from "@ngrx/store";

// Actions
import { logoutAction } from "../../core/state/reducers/clear/clearState.actions";
import * as responsiveActions from "../../core/state/reducers/responsive/responsive.actions";
import { Observable, first, map, firstValueFrom } from "rxjs";
import { GlobalStateReducersList } from "../../core/state/constants/state.constants";

@Injectable({
  providedIn: "root",
})
export class AuthFunctions {
  isProduction = false;

  constructor(private route: Router, private store: Store<GlobalState>) {}

  logout(): void {
    this.store.dispatch(logoutAction());
    window.innerWidth < 960
      ? this.store.dispatch(responsiveActions.isMobile())
      : this.store.dispatch(responsiveActions.isDesktop());

    localStorage.clear();
    sessionStorage.clear();

    this.route.navigate(["/auth"], {
      queryParams: { signin: true },
    });
  }

  async getToken(): Promise<string | void> {
    const tokenStore = await firstValueFrom(this.getTokenFromStore());
    return tokenStore;
  }

  getTokenFromStore(): Observable<string> {
    return this.store.select(GlobalStateReducersList.AUTHENTICATION).pipe(
      first(),
      map((userStore) => userStore.user?.accessToken || "")
    );
  }
}
