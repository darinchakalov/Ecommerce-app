import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { OurAdvantagesComponent } from './components/our-advantages/our-advantages.component';
import { AboutMainComponent } from './components/about-main/about-main.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    PresentationComponent,
    OurAdvantagesComponent,
    AboutMainComponent,
  ],
  imports: [CommonModule],
  exports: [AboutMainComponent],
})
export class AboutModule {}
