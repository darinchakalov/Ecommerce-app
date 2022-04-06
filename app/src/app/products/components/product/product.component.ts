import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/shared/interfaces/product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { addItem, incrementCounter } from 'src/app/+store/actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  product!: IProduct;

  id = this.activatedRoute.snapshot.params['productId'];

  get items() {
    return this.cartService.getItems();
  }

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private store: Store<any>
  ) {
    this.fetchProduct();
    console.log(this.ifExists());
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

  ifExists() {
    let items = JSON.parse(localStorage.getItem('global')!);
    return items.items.find((x: IProduct) => x._id === this.id) ? true : false;
  }
}
