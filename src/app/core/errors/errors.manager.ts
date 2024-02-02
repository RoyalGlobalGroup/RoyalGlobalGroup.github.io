/* eslint-disable no-prototype-builtins */
import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { ErrorX } from "./interfaces/error";
import { ErrorCodesMessages } from "./constants/errorsCodesMessages.constants";

@Injectable({
  providedIn: "root",
})
export class ErrorsManager {
  constructor(private messageService: MessageService) {}

  manageError(
    error: HttpErrorResponse | ErrorX,
    customMessage?: string
  ): void {
    // we validate if it is a http error
    const errorX: ErrorX = this.determinateTypeError(error);

    // get error code
    const errorCode: string = this.getErrorCode(errorX);

    const messageError: string =
      customMessage || this.getErrorMessage(errorCode);

    this.messageService.add({
      life: 5000,
      severity: "error",
      summary: "Error",
      detail: messageError,
    });
  }

  private determinateTypeError(
    errorObject: HttpErrorResponse | ErrorX
  ): ErrorX {
    return errorObject?.error?.hasOwnProperty("code")
      ? errorObject
      : (errorObject?.error as ErrorX);
  }

  private getErrorCode(errorX: ErrorX): string {
    return errorX?.error.code || "";
  }

  private getErrorMessage(errorCode: string): string {
    if (errorCode) {
      const formatErrorCode = `E${errorCode}`;
      return ErrorCodesMessages[formatErrorCode] || ErrorCodesMessages.DEFAULT;
    }

    return ErrorCodesMessages.DEFAULT;
  }
}
