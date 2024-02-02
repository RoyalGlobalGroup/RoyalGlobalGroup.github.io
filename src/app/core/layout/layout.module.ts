import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { MenuComponent } from "./components/menu/menu.component";
import { SharedModule } from "src/app/shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    NgOptimizedImage,
  ],
  exports: [HeaderComponent, MenuComponent],
})
export class LayoutModule {}
