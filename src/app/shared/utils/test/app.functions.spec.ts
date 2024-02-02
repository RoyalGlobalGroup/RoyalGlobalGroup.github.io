import { TestBed } from "@angular/core/testing";
import { AppFunctions } from "../app.functions";

describe("AppFunctions", () => {
  let service: AppFunctions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppFunctions);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("check hostName", () => {
    const result = service.getHostName();
    expect(result).toBeDefined();
  });
});
