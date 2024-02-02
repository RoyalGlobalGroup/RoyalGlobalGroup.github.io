export class ErrorBodyX {
  code: string;
  message = "Custom Error";
  context = "custom";

  constructor(code: string) {
    this.code = code;
  }
}
