import { Component } from '@angular/core';
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

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  constructor(
    private productService: ProductService,
    private userService: AuthService,
    private cartService: CartService
  ) {
    this.fetchAllProducts();
  }

  fetchAllProducts(): void {
    this.productService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }

  addToCart(product: IProduct): void {
    this.cartService.addToCart(product, 1);
  }
}
