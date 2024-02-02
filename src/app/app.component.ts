import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  LanguagesForTranslate,
  AllowedLanguages,
} from "./core/libraries/ngx-translate/constants/languages.constants";
import { GlobalState } from "./core/state/app.state";
import { Store } from "@ngrx/store";
import { first, lastValueFrom, map, Subject, Subscription } from "rxjs";
import { GlobalStateReducersList } from "./core/state/constants/state.constants";
import { PrimeNGConfig } from "primeng/api";

// Actions
import * as languagesActions from "./core/state/reducers/language/language.actions";
import * as responsiveActions from "./core/state/reducers/responsive/responsive.actions";
import { LayoutManager } from "./core/layout/layout.manager";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "Angular";

  // translate
  translateDefault!: typeof LanguagesForTranslate[keyof typeof LanguagesForTranslate];

  // Spinner
  inProgress = false;
  loaderSubscription!: Subscription;

  // Components
  containerClass$ = new Subject<boolean>();
  showMenuComponent$ = new Subject<boolean>();
  showHeaderComponent$ = new Subject<boolean>();

  constructor(
    private primengConfig: PrimeNGConfig,
    private translate: TranslateService,
    private store: Store<GlobalState>,
    private layoutManager: LayoutManager
  ) {
    this.setLanguage();
  }
  ngOnInit(): void {
    this.initConfigFeatures();
    this.spinnerSubscription();
    this.howOrHideComponents();
  }

  ngOnDestroy(): void {
    if (this.loaderSubscription) this.loaderSubscription?.unsubscribe();
  }

  // Detection change resize devices
  @HostListener("window:resize", ["$event"])
  onResize() {
    window.innerWidth < 960
      ? this.store.dispatch(responsiveActions.isMobile())
      : this.store.dispatch(responsiveActions.isDesktop());
  }

  initConfigFeatures(): void {
    // Detect size device init
    window.innerWidth < 960
      ? this.store.dispatch(responsiveActions.isMobile())
      : this.store.dispatch(responsiveActions.isDesktop());

    // Ripple for init prime ng
    this.primengConfig.ripple = true;
  }

  // Initial Language or Active
  async setLanguage(): Promise<void> {
    const languages: string[] = Object.values(LanguagesForTranslate);

    this.translate.addLangs(languages);

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang(LanguagesForTranslate.SPANISH);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    const stateLanguage = await lastValueFrom(
      this.store.select(GlobalStateReducersList.LANGUAGE).pipe(
        first(),
        map((language) => language?.active)
      )
    );

    if (!stateLanguage) {
      this.translate.use(LanguagesForTranslate.SPANISH);
      this.store.dispatch(
        languagesActions.setLanguage({ language: AllowedLanguages.SPANISH })
      );
      return;
    }

    this.translateDefault = LanguagesForTranslate[stateLanguage];
    this.translate.use(this.translateDefault);
  }

  spinnerSubscription(): void {
    this.loaderSubscription = this.store
      .select(GlobalStateReducersList.LOADER)
      .subscribe((spinner) => (this.inProgress = spinner?.isLoading));
  }

  howOrHideComponents(): void {
    this.containerClass$ = this.layoutManager.containerClass;
    this.showHeaderComponent$ = this.layoutManager.showHeaderComponent;
    this.showMenuComponent$ = this.layoutManager.showPanelMenu;
  }
}
