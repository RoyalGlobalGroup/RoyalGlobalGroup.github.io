import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { PrimeNgModule } from "./primeng/prime.module";
import { ComponentsModule } from "./components/components.module";
import { DirectivesModule } from "./directives/directives.module";
import { PipesModule } from "./pipes/pipes.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    PrimeNgModule,
    ComponentsModule,
    DirectivesModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TranslateModule,
    PrimeNgModule,
    ComponentsModule,
    DirectivesModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
