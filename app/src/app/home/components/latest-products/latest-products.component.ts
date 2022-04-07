import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItem, incrementCounter } from 'src/app/+store/actions';
import { ProductService } from 'src/app/products/services/product.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { AuthService } from 'src/app/user/services/auth.service';
import Swal from 'sweetalert2';

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

  constructor(
    private productService: ProductService,
    private store: Store,
    private userService: AuthService
  ) {
    this.fetchLatestProducts();
  }

  fetchLatestProducts(): void {
    this.productService
      .getAllProducts(5)
      .subscribe((products) => (this.products = products));
  }

  addToCart(product: IProduct): void {
    this.store.dispatch(addItem({ item: product }));
    this.store.dispatch(incrementCounter());
    // this.isAddedHandler();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Product was added to cart',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
