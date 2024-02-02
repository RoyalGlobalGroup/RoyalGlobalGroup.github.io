import { ActionReducerMap } from "@ngrx/store";

// Global App Reducers
import * as responsiveReducer from "./reducers/responsive/responsive.reducer";
import * as languageReducer from "./reducers/language/language.reducer";
import * as loaderReducer from "./reducers/loader/loader.reducer";

// Individual reducers

export interface GlobalState {
  responsive: responsiveReducer.ResponsiveState;
  language: languageReducer.LanguageState;
  loader: loaderReducer.LoaderState;
}

export const appReducers: ActionReducerMap<GlobalState> = {
  responsive: responsiveReducer.responsiveReducer,
  language: languageReducer.languageReducer,
  loader: loaderReducer.loaderReducer,
};
