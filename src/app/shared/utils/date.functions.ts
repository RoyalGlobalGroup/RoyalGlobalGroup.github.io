import { Injectable } from "@angular/core";
import { DateTime } from "luxon";

@Injectable({
  providedIn: "root",
})
export class DateFunctions {
  toESTTime(time: DateTime): DateTime {
    return time.setZone("America/New_York");
  }

  toLocalTime(date: Date): DateTime {
    return DateTime.local(
      date.getFullYear(),
      date.getMonth(),
      date.getDay(),
      date.getHours(),
      date.getMinutes()
    );
  }

  toUTCTime(date: Date): DateTime {
    return DateTime.utc(
      date.getFullYear(),
      date.getMonth(),
      date.getDay(),
      date.getHours(),
      date.getMinutes()
    );
  }
}
