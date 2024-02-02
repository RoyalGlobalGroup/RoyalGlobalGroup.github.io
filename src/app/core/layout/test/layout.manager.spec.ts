import { TestBed } from "@angular/core/testing";

import { LayoutManager } from "../layout.manager";

describe("LayoutManager", () => {
  let service: LayoutManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutManager);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("toggle menu", () => {
    service.toggleMenuComponent(true);

    service.showPanelMenu.subscribe((response) => {
      expect(response).toBeTrue();
    });
  });

  it("toggle header", () => {
    service.toggleHeaderComponent(true);

    service.showHeaderComponent.subscribe((response) => {
      expect(response).toBeTrue();
    });
  });
});
