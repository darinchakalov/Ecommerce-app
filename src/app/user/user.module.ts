import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-router.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, RouterModule, UserRoutingModule, FormsModule],
  exports: [RegisterComponent],
})
export class UserModule {}
