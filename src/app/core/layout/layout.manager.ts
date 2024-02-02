import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LayoutManager {
  containerClass: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  showHeaderComponent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  showPanelMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  // GROUP COMPONENTS TOGGLE
  disableAllComponents() {
    this.showPanelMenu.next(false);
    this.showHeaderComponent.next(false);
    this.containerClass.next(false);
  }

  enableAllComponents() {
    this.showPanelMenu.next(true);
    this.showHeaderComponent.next(true);
    this.containerClass.next(true);
  }

  // INDIVIDUAL TOGGLE COMPONENTS
  toggleMenuComponent(value: boolean) {
    this.showPanelMenu.next(value);
  }

  toggleHeaderComponent(value: boolean) {
    this.showHeaderComponent.next(value);
  }
}
