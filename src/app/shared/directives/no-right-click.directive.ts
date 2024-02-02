import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[appNeoNoRigthClick]",
})
export class NoRightClickDirective {
  @HostListener("contextmenu", ["$event"])
  onRightClick(event: MouseEvent) {
    event.preventDefault();
  }
}
