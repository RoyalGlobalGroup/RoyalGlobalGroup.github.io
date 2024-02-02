import { ElementRef } from "@angular/core";
import { NoTranslateDirective } from "../no-translate.directive";

describe("NoTranslateDirective", () => {
  it("should create an instance", () => {
    const htmlElement: HTMLDivElement = document.createElement("div");
    htmlElement.setAttribute("id", "modalBackground");

    const elementTest: ElementRef = new ElementRef(htmlElement);
    const directive = new NoTranslateDirective(elementTest);
    expect(directive).toBeTruthy();
  });
});
