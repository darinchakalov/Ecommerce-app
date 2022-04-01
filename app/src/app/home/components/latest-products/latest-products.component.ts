import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/services/product.service';
import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.css'],
})
export class LatestProductsComponent {
  products: IProduct[] | undefined;

  constructor(private productService: ProductService) {
    this.fetchLatestProducts();
  }

  fetchLatestProducts(): void {
    this.productService
      .getAllProducts(5)
      .subscribe((products) => (this.products = products));
  }
}
