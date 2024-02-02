import { TestBed } from "@angular/core/testing";
import { StringsFunctions } from "../strings.functions";

describe("StringsFunctions", () => {
  let service: StringsFunctions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringsFunctions);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("capitalize should capitalize string", () => {
    expect(service.capitalize("tESt")).toBe("Test");
  });
});
