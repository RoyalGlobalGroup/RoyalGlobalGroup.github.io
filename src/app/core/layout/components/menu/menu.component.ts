import { Component } from "@angular/core";

@Component({
  selector: "appNeo-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  constructor() {}
  requestQuote(): void {
    // Implementar lógica para solicitar cotización aquí
  }
  logout(): void {
  }
}
