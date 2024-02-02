import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StringsFunctions {
  capitalize(value: string): string {
    const lowercase = value.toLocaleLowerCase();
    return `${lowercase.charAt(0).toUpperCase()}${lowercase.slice(1)}`;
  }
}
