import { CapitalizePipe } from "../capitalize.pipe";

describe("CapitalizePipe", () => {
  it("create an instance", () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform("test")).toBe("Test");
  });
});
