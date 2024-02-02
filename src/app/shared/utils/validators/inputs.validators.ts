import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class RegexConstants {
  public static REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}

export function RegexValidator(reg: RegexConstants): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && !control.value.toString().match(reg)) {
      return { expression: true };
    }
    return null;
  };
}
