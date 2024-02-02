export const HttpTranslateUrl = {
  path: "/assets/i18n",
};

import { LanguagesForTranslate } from "src/app/core/libraries/ngx-translate/constants/languages.constants";

export interface ILanguage {
  name: string;
  code: typeof LanguagesForTranslate[keyof typeof LanguagesForTranslate];
  image_src: string;
}
