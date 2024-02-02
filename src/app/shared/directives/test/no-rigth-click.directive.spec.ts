import { NoRightClickDirective } from "../no-right-click.directive";
import { TestBed } from "@angular/core/testing";

describe("NoRightClickDirective", () => {
  let directive: NoRightClickDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoRightClickDirective],
      providers: [NoRightClickDirective],
    }).compileComponents();

    directive = TestBed.inject(NoRightClickDirective);
  });

  it("should create an instance", () => {
    const directive = new NoRightClickDirective();
    expect(directive).toBeTruthy();
  });

  it("click directive", () => {
    const htmlElement: HTMLDivElement = document.createElement("div");
    htmlElement.setAttribute("id", "modalBackground");

    const target = htmlElement;

    const baseEvent = new MouseEvent("click");

    const event = Object.defineProperty(baseEvent, "target", {
      value: target,
      enumerable: true,
    });

    directive.onRightClick(event);
    expect(directive).toBeDefined();
  });
});
