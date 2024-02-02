import { Component } from "@angular/core";
import { AuthFunctions } from "../../../../pages/auth/auth.functions";

@Component({
  selector: "appNeo-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  constructor(private authFunctions: AuthFunctions) {}

  logout(): void {
    this.authFunctions.logout();
  }
}
