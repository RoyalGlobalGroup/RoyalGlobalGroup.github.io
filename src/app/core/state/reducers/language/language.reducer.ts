import { Action, createReducer, on } from "@ngrx/store";
import { AllowedLanguages } from "../../../libraries/ngx-translate/constants/languages.constants";
import { setLanguage } from "./language.actions";

export interface LanguageState {
  active: null | typeof AllowedLanguages[keyof typeof AllowedLanguages];
}

export const initialState: LanguageState = {
  active: null,
};

const _languageReducer = createReducer(
  initialState,
  on(setLanguage, (state, action) => ({ ...state, active: action.language }))
);

export function languageReducer(
  state: LanguageState | undefined,
  action: Action
) {
  return _languageReducer(state, action);
}
