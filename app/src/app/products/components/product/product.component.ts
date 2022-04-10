import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductService } from '../../services/product.service';
import { AuthService } from 'src/app/user/services/auth.service';
import { CartService } from '../../services/cart.service';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  product!: IProduct;

  id = this.activatedRoute.snapshot.params['productId'];

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private userService: AuthService,
    private cartService: CartService,
    private messageService: MessageService
  ) {
    this.fetchProduct();
  }

  fetchProduct(): void {
    this.productService
      .getSingleProduct(this.id)
      .subscribe((product) => (this.product = product));
  }

  addToCart(productCount: number): void {
    if (productCount > this.product.quantity) {
      this.messageService.errorMessage(
        'Cannot add more quantity than the available!'
      );
      return;
    }
    this.cartService.addToCart(this.product, productCount);
  }
}
