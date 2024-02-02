import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// NgRx
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducers } from "./state/app.state";
import { metaReducers } from "./libraries/ngrx-redux/constants/ngrx.constants";
import { environment } from "src/environments/environment";

// Translate
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpLoaderFactory } from "./libraries/ngx-translate/ngx-translate";
import { HttpClient } from "@angular/common/http";
import { LanguagesForTranslate } from "./libraries/ngx-translate/constants/languages.constants";
import { LayoutModule } from "./layout/layout.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: LanguagesForTranslate.SPANISH,
    }),
    LayoutModule,
  ],
  exports: [StoreModule, StoreDevtoolsModule, TranslateModule, LayoutModule],
})
export class CoreModule {}
