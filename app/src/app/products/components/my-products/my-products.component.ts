import { Component } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css'],
})
export class MyProductsComponent {
  products: IProduct[] = [];

  get hasProducts(): boolean {
    console.log(this.products?.length);

    return this.products?.length > 0;
  }

  constructor(private productService: ProductService) {
    this.fetchMyProducts();
  }

  fetchMyProducts(): void {
    this.productService
      .getMyProducts()
      .subscribe((products) => (this.products = products));
  }
}
