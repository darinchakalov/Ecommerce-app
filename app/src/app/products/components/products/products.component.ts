import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: IProduct[] | undefined;

  constructor(private productService: ProductService) {
    this.fetchAllProducts();
  }

  fetchAllProducts(): void {
    this.productService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }
}
