import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { LatestProductsComponent } from './components/latest-products/latest-products.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BeInspiredComponent } from './components/be-inspired/be-inspired.component';
import { ElegantComponent } from './components/elegant/elegant.component';

@NgModule({
  declarations: [MainComponent, LatestProductsComponent, WelcomeComponent, BeInspiredComponent, ElegantComponent],
  imports: [CommonModule],
  exports: [MainComponent, LatestProductsComponent],
})
export class HomeModule {}
