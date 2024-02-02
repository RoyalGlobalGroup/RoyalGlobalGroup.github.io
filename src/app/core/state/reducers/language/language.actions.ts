import { createAction, props } from "@ngrx/store";
import { AllowedLanguages } from "../../../libraries/ngx-translate/constants/languages.constants";

export const setLanguage = createAction(
  "[Language] setLanguage",
  props<{ language: typeof AllowedLanguages[keyof typeof AllowedLanguages] }>()
);
