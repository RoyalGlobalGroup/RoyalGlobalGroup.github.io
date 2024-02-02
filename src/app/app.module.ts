import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoaderInterceptor } from "./core/interceptors/loader.interceptor";
import { TokenInterceptor } from "./core/interceptors/token.interceptor";
import { ErrorsManager } from "./core/errors/errors.manager";
import { MessageService } from "primeng/api";
import {provideClientHydration} from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
  ],
  providers: [
    ErrorsManager,
    MessageService,
    [provideClientHydration()],
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
