import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductService } from '../../services/product.service';
import { addItem, incrementCounter } from 'src/app/+store/actions';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/user/services/auth.service';

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
    private store: Store<any>,
    private userService: AuthService
  ) {
    this.fetchProduct();
  }

  fetchProduct(): void {
    this.productService
      .getSingleProduct(this.id)
      .subscribe((product) => (this.product = product));
  }

  addToCart(): void {
    this.store.dispatch(addItem({ item: this.product }));
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
