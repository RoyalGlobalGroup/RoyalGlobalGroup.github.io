import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NoRightClickDirective } from "./no-right-click.directive";
import { NoTranslateDirective } from "./no-translate.directive";

@NgModule({
  declarations: [NoRightClickDirective, NoTranslateDirective],
  imports: [CommonModule],
  exports: [NoRightClickDirective, NoTranslateDirective],
})
export class DirectivesModule {}
