import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './components/create/create.component';
import { ProductRoutingModule } from './products-router.module';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [CreateComponent, ProductsComponent, ProductComponent],
  imports: [CommonModule, ProductRoutingModule, FormsModule],
  providers: [ProductService],
})
export class ProductsModule {}
