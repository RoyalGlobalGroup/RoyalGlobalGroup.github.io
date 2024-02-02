import { Injectable } from "@angular/core";
import { Location } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class AppFunctions {
  constructor(private loc: Location) {}

  getHostName(): string {
    const angularRoute = this.loc.path();
    const url = window.location.href;
    const domainAndApp = url.replace(angularRoute, "");
    return domainAndApp;
  }
}
