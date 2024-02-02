import { ActionReducerMap } from "@ngrx/store";

// Global App Reducers
import * as responsiveReducer from "./reducers/responsive/responsive.reducer";
import * as languageReducer from "./reducers/language/language.reducer";
import * as loaderReducer from "./reducers/loader/loader.reducer";

// Individual reducers
import * as authenticationReducer from "../../pages/auth/state/authentication.reducer";

export interface GlobalState {
  responsive: responsiveReducer.ResponsiveState;
  language: languageReducer.LanguageState;
  loader: loaderReducer.LoaderState;
  authentication: authenticationReducer.UserState;
}

export const appReducers: ActionReducerMap<GlobalState> = {
  responsive: responsiveReducer.responsiveReducer,
  language: languageReducer.languageReducer,
  loader: loaderReducer.loaderReducer,
  authentication: authenticationReducer.authenticationReducer,
};
