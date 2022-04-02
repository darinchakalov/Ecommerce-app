import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appPassMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PassMatchDirective,
      multi: true,
    },
  ],
})
export class PassMatchDirective implements Validator {
  @Input('pass') pass: string | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value !== this.pass) {
      return {
        passNoMatch: true,
      };
    }
    return null;
  }
}
