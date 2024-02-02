import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { PrimeNgModule } from "../primeng/prime.module";
import { TranslateModule } from "@ngx-translate/core";
import { SpinnerComponent } from "./spinner/spinner.component";
import { DirectivesModule } from "../directives/directives.module";
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNgModule,
    TranslateModule,
    DirectivesModule,
    PipesModule,
  ],
  exports: [SpinnerComponent],
})
export class ComponentsModule {}
