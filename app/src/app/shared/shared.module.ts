import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PassMatchDirective } from './directives/pass-match.directive';

@NgModule({
  declarations: [LoaderComponent, PassMatchDirective],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [LoaderComponent],
})
export class SharedModule {}
