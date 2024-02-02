import { ErrorBodyX } from "../interfaces/body-error";

describe("ErrorBodyX", () => {
  it("should create an instance", () => {
    const code = "E99999";
    expect(new ErrorBodyX(code)).toBeTruthy();
  });
});
