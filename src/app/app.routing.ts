import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoggedGuard } from "./core/guards/logged.guard";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/auth",
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./pages/auth/auth.module").then((m) => m.AuthModule),
    canLoad: [LoggedGuard],
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
    canLoad: [LoggedGuard],
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "/auth",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
