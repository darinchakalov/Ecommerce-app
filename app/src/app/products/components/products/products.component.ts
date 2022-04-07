import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItem, incrementCounter } from 'src/app/+store/actions';
import { IProduct } from 'src/app/shared/interfaces/product';
import { AuthService } from 'src/app/user/services/auth.service';
import Swal from 'sweetalert2';
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
    private store: Store,
    private userService: AuthService
  ) {
    this.fetchAllProducts();
  }

  fetchAllProducts(): void {
    this.productService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }

  addToCart(product: IProduct): void {
    this.store.dispatch(addItem({ item: product }));
    this.store.dispatch(incrementCounter());
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Product was added to cart',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
