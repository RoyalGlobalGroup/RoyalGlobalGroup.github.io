import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "./shared/shared.module";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { GlobalState } from "./core/state/app.state";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { globalStateDefault } from "./core/state/functions/globalState.functions";
import {
  AllowedLanguages,
  LanguagesForTranslate,
} from "./core/libraries/ngx-translate/constants/languages.constants";
import { MessageService, PrimeNGConfig } from "primeng/api";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore<GlobalState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot(), SharedModule],
      declarations: [AppComponent],
      providers: [provideMockStore(), PrimeNGConfig, MessageService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("Angular");
  });

  it("On Resize event Mobile", fakeAsync(() => {
    window.innerWidth = 500;
    const storeSpy = spyOn(store, "dispatch").and.callThrough();
    component.onResize();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  }));

  it("On Resize event Desktop", fakeAsync(() => {
    window.innerWidth = 1000;
    const storeSpy = spyOn(store, "dispatch").and.callThrough();
    component.onResize();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  }));

  it("Init config responsive < 960 ", () => {
    window.innerWidth = 500;
    const storeSpy = spyOn(store, "dispatch").and.callThrough();
    component.initConfigFeatures();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });

  it("Init config responsive > 960 ", () => {
    window.innerWidth = 1000;
    const storeSpy = spyOn(store, "dispatch").and.callThrough();
    component.initConfigFeatures();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });

  it("Default language ", async () => {
    const stateDefault: GlobalState = await globalStateDefault();
    stateDefault.language.active = AllowedLanguages.ENGLISH;
    store.setState(stateDefault);
    await component.setLanguage();
    expect(component.translateDefault).toBe(LanguagesForTranslate.ENGLISH);
  });

  it("should prime init to be true", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const service = fixture.debugElement.injector.get(PrimeNGConfig);
    app.ngOnInit();

    expect(service.ripple).toBeTrue();
  });
});
