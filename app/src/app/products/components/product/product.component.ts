import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/shared/interfaces/product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { addItem, incrementCounter } from 'src/app/+store/actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  product!: IProduct;

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
  }

  fetchProduct(): void {
    const id = this.activatedRoute.snapshot.params['productId'];

    this.productService
      .getSingleProduct(id)
      .subscribe((product) => (this.product = product));
  }

  addToCart(): void {
    // this.cartService.addToCart(this.product!);
    this.store.dispatch(addItem({ item: this.product }));
    this.store.dispatch(incrementCounter());

    // this.store.subscribe(function () {
    //   // localStorage.clear();
    //   localStorage.setItem('state', JSON.stringify({ test: 'the test1' }));
    // });
  }
}
