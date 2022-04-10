import { Component, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IProduct } from 'src/app/shared/interfaces/product';
import { AuthService } from 'src/app/user/services/auth.service';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: IProduct[] | undefined;
  @Input() length: number = 0;

  totalProducts!: number;

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  constructor(
    private productService: ProductService,
    private userService: AuthService,
    private cartService: CartService
  ) {
    // this.fetchAllProducts();
    this.productService.getAllProductsPaginated(0, 10).subscribe((result) => {
      this.products = result.products;
      this.length = result.totalResults;
    });
  }

  fetchAllProducts(): void {
    this.productService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }

  addToCart(product: IProduct): void {
    this.cartService.addToCart(product, 1);
  }

  onPageChange(event: PageEvent) {
    console.log(event);

    const startIndex = event.pageIndex * event.pageSize;
    // let endIndex = startIndex + event.pageSize;
    let limit = event.pageSize;

    // if (endIndex > this.totalProducts) {
    //   endIndex = this.totalProducts;
    // }

    this.productService
      .getAllProductsPaginated(startIndex, limit)
      .subscribe((result) => {
        this.products = result.products;
        this.length = result.totalResults;
      });
  }
}
