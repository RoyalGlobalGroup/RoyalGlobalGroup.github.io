import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appNeoNoTranslateDirective]",
})
export class NoTranslateDirective {
  constructor(private element: ElementRef) {
    if (this.element) {
      element.nativeElement.setAttribute("translate", "no");
    }
  }
}
