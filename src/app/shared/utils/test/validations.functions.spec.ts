import { TestBed } from "@angular/core/testing";

import { ValidationsFunctions } from "../validations.functions";

describe("ValidationsFunctions", () => {
  let service: ValidationsFunctions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationsFunctions);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("validate email true", () => {
    const testEmail = "test@gmail.com";
    const result: boolean = service.validateEmail(testEmail);

    expect(result).toBeTrue();
  });

  it("validate email false", () => {
    const testEmail = "test@gmail";
    const result: boolean = service.validateEmail(testEmail);

    expect(result).toBeFalse();
  });
});
