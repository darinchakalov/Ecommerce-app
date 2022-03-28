import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-router.module';


@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RouterModule, UserRoutingModule],
  exports: [RegisterComponent],
})
export class UserModule {}
