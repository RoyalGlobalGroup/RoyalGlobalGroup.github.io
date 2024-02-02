import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderComponent } from "../header.component";
import { TranslateModule } from "@ngx-translate/core";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { LanguageState } from "src/app/core/state/reducers/language/language.reducer";
import { LanguagesForTranslate } from "../../../../libraries/ngx-translate/constants/languages.constants";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: MockStore<LanguageState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [TranslateModule.forRoot()],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("on change language set", () => {
    component.selectedLanguage = {
      code: LanguagesForTranslate.SPANISH,
      name: "",
      image_src: "",
    };

    const storeSpy = spyOn(store, "dispatch").and.callThrough();
    component.onChangeLanguage();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });

  it("on change store", () => {
    const nextState: LanguageState = {
      active: "SPANISH",
    };

    store.setState(nextState);

    const storeSpy = spyOn(store, "select").and.callThrough();
    component.loadTranslates();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });

  it("on change language unset", () => {
    const storeSpy = spyOn(store, "dispatch").and.callThrough();
    component.onChangeLanguage();
    expect(storeSpy).toHaveBeenCalledTimes(1);
  });
});
