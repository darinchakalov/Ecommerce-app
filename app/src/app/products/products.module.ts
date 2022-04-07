import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './components/create/create.component';
import { ProductRoutingModule } from './products-router.module';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { MyProductsComponent } from './components/my-products/my-products.component';
import { CartComponent } from './components/cart/cart.component';
import { EditComponent } from './components/edit/edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreateComponent,
    ProductsComponent,
    ProductComponent,
    MyProductsComponent,
    CartComponent,
    EditComponent,
  ],
  imports: [CommonModule, ProductRoutingModule, FormsModule, SharedModule],
  providers: [ProductService],
})
export class ProductsModule {}
