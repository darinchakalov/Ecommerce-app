import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PassMatchDirective } from './directives/pass-match.directive';
import { ImageUrlValidatorDirective } from './directives/image-url-validator.directive';
import { ShortenPipe } from './pipes/shorten.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    PassMatchDirective,
    ImageUrlValidatorDirective,
    ShortenPipe,
  ],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [
    LoaderComponent,
    PassMatchDirective,
    ImageUrlValidatorDirective,
    ShortenPipe,
  ],
})
export class SharedModule {}
