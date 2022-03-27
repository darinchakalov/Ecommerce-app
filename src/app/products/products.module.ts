import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './components/create/create.component';
import { ProductRoutingModule } from './products-router.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateComponent],
  imports: [CommonModule, ProductRoutingModule, FormsModule],
})
export class ProductsModule {}
