import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PassMatchDirective } from './directives/pass-match.directive';
import { ImageUrlValidatorDirective } from './directives/image-url-validator.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { EmailValidatorDirective } from './directives/email-validator.directive';

@NgModule({
  declarations: [
    LoaderComponent,
    PassMatchDirective,
    ImageUrlValidatorDirective,
    ShortenPipe,
    EmailValidatorDirective,
  ],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [
    LoaderComponent,
    PassMatchDirective,
    ImageUrlValidatorDirective,
    ShortenPipe,
    EmailValidatorDirective,
  ],
})
export class SharedModule {}
