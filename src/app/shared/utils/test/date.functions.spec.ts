import { TestBed } from "@angular/core/testing";
import { DateFunctions } from "../date.functions";
import { DateTime } from "luxon";

describe("DateFunctions", () => {
  let service: DateFunctions;
  const isoTest = DateTime.fromISO("2022-12-08T18:18:17+0000");
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateFunctions);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("check toESTTime", () => {
    const result = service.toESTTime(isoTest);
    expect(result.zone.name).toBe("America/New_York");
  });

  it("check toLocalTime", () => {
    const result = service.toLocalTime(isoTest.toJSDate());
    expect(result).toBeDefined();
  });

  it("check toUTCTime", () => {
    const result = service.toUTCTime(isoTest.toJSDate());
    expect(result).toBeDefined();
  });
});
