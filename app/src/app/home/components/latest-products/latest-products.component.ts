import { Component } from '@angular/core';
import { CartService } from 'src/app/products/services/cart.service';
import { ProductService } from 'src/app/products/services/product.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.css'],
})
export class LatestProductsComponent {
  products: IProduct[] | undefined;

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get isAdmin(): boolean {
    return this.userService.user!.isAdmin;
  }

  constructor(
    private productService: ProductService,
    private userService: AuthService,
    private cartService: CartService
  ) {
    this.fetchLatestProducts();
  }

  fetchLatestProducts(): void {
    this.productService
      .getAllProducts(5)
      .subscribe((products) => (this.products = products));
  }

  addToCart(product: IProduct): void {
    this.cartService.addToCart(product, 1);
  }
}
