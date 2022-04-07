import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PassMatchDirective } from './directives/pass-match.directive';
import { ImageUrlValidatorDirective } from './directives/image-url-validator.directive';

@NgModule({
  declarations: [
    LoaderComponent,
    PassMatchDirective,
    ImageUrlValidatorDirective,
  ],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [LoaderComponent, PassMatchDirective, ImageUrlValidatorDirective],
})
export class SharedModule {}
