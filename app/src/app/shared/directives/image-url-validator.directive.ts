import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appImageUrlValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ImageUrlValidatorDirective,
      multi: true,
    },
  ],
})
export class ImageUrlValidatorDirective implements Validator {
  extensions: string[] = ['jpg', 'png', 'jpeg', 'webp', 'svg', 'gif'];

  validate(control: AbstractControl): ValidationErrors | null {
    let urlSplitByDoubleDots = control.value.split(':')[0];
    let urlSplitByDot = control.value.split('.').pop();
    if (urlSplitByDoubleDots !== 'https' && urlSplitByDoubleDots !== 'http') {
      return { invalidProtocol: true };
    }
    if (!this.extensions.includes(urlSplitByDot)) {
      return { invalidExtention: true };
    }
    return null;
  }
}
