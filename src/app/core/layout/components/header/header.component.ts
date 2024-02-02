import { Component, OnInit } from "@angular/core";
import { ILanguage } from "../../../libraries/ngx-translate/interfaces/ngx-translate.interfaces";
import { TranslateService } from "@ngx-translate/core";
import { GlobalState } from "../../../state/app.state";
import { Store } from "@ngrx/store";
import {
  LanguagesForShow,
  LanguagesForTranslate,
  AllowedLanguages,
  LanguagesTranslateForState,
} from "../../../libraries/ngx-translate/constants/languages.constants";
import { lastValueFrom, first, map } from "rxjs";
import { GlobalStateReducersList } from "../../../state/constants/state.constants";

// Actions
import * as languagesActions from "../../../state/reducers/language/language.actions";

@Component({
  selector: "appNeo-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  // Language
  selectedLanguage!: ILanguage | undefined;
  languages!: ILanguage[];

  constructor(
    private translate: TranslateService,
    private store: Store<GlobalState>
  ) {}

  ngOnInit(): void {
    this.loadTranslates();
  }

  async loadTranslates(): Promise<void> {
    this.languages = [
      {
        name: LanguagesForShow.ENGLISH,
        code: LanguagesForTranslate.ENGLISH,
        image_src: "./assets/i18n/images/usa.svg",
      },
      {
        name: LanguagesForShow.SPANISH,
        code: LanguagesForTranslate.SPANISH,
        image_src: "./assets/i18n/images/esp.svg",
      },
    ];

    const stateLanguage = await lastValueFrom(
      this.store.select(GlobalStateReducersList.LANGUAGE).pipe(
        first(),
        map((language) => language?.active || AllowedLanguages.SPANISH)
      )
    );

    const findStateLanguage = this.languages.find(
      (language) => language.code === LanguagesForTranslate[stateLanguage]
    );

    this.selectedLanguage = findStateLanguage;
  }

  onChangeLanguage(): void {
    if (this.selectedLanguage) {
      this.translate.use(this.selectedLanguage.code);

      const langSelected =
        LanguagesTranslateForState[this.selectedLanguage.code];

      const langFinded = Object.values(AllowedLanguages).find(
        (lang) => lang === langSelected
      );

      if (langFinded)
        this.store.dispatch(
          languagesActions.setLanguage({ language: langFinded })
        );
    }
  }
}
