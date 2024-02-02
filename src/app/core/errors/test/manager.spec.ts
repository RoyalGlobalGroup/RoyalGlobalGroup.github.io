import { TestBed } from "@angular/core/testing";
import { ErrorsManager } from "../errors.manager";
import { MessageService } from "primeng/api";
import { ErrorCodesMessages } from "../constants/errorsCodesMessages.constants";
import { ErrorX } from "../interfaces/error";
import { HttpErrorResponse } from "@angular/common/http";

describe("ErrorsManager", () => {
  let service: ErrorsManager;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
    });
    service = TestBed.inject(ErrorsManager);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("create verify error type with code", () => {
    const error = new ErrorX(ErrorCodesMessages.E990000);
    const serviceSpy = spyOn(service, "manageError").and.callThrough();
    service.manageError(error);

    expect(serviceSpy).toHaveBeenCalledTimes(1);
  });

  it("create verify error type without code", () => {
    const error = new ErrorX("");
    const serviceSpy = spyOn(service, "manageError").and.callThrough();
    service.manageError(error);

    expect(serviceSpy).toHaveBeenCalledTimes(1);
  });

  it("create verify http error", () => {
    const error = new HttpErrorResponse({
      error: null,
    });
    const serviceSpy = spyOn(service, "manageError").and.callThrough();
    service.manageError(error);

    expect(serviceSpy).toHaveBeenCalledTimes(1);
  });
});
