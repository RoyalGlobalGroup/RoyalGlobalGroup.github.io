import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MenuComponent } from "../menu.component";
import { TranslateModule } from "@ngx-translate/core";
import { provideMockStore } from "@ngrx/store/testing";
import { AuthFunctions } from "../../../../../pages/auth/auth.functions";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

describe("MenuComponent", () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  const mockRouter = { navigate: jasmine.createSpy("navigate") };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [TranslateModule.forRoot(), RouterTestingModule],
      providers: [
        provideMockStore(),
        AuthFunctions,
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("logout is called", () => {
    const changeRouteSpy = spyOn(component, "logout").and.callThrough();
    component.logout();
    expect(changeRouteSpy).toHaveBeenCalledTimes(1);
  });
});
