import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalize",
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    const lowercase = value.toLocaleLowerCase();
    return `${lowercase.charAt(0).toUpperCase()}${lowercase.slice(1)}`;
  }
}
