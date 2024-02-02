import { ErrorBodyX } from "./body-error";

export class ErrorX {
  error: ErrorBodyX;

  constructor(code: string) {
    this.error = new ErrorBodyX(code);
  }
}
