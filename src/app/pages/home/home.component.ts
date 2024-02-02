import { Component, OnDestroy } from "@angular/core";
import { LayoutManager } from "../../core/layout/layout.manager";

@Component({
  selector: "appNeo-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnDestroy {
  constructor(private layoutManager: LayoutManager) {
    this.layoutManager.enableAllComponents();
    this.layoutManager.toggleMenuComponent(false);
  }
  ngOnDestroy(): void {
    this.layoutManager.disableAllComponents();
  }
}
