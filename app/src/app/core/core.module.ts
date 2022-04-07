import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';
import { httpInterceptorHandler } from './interceptors/http.interceptor';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, MatMenuModule, MatBadgeModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [httpInterceptorHandler, AuthGuard],
})
export class CoreModule {}
