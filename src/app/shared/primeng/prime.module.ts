import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { ToastModule } from "primeng/toast";

@NgModule({
  imports: [
    ButtonModule,
    ProgressSpinnerModule,
    DropdownModule,
    InputTextModule,
  ],
  exports: [
    ButtonModule,
    ProgressSpinnerModule,
    DropdownModule,
    InputTextModule,
    ToastModule,
  ],
})
export class PrimeNgModule {}
