import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectGlobalItems } from 'src/app/+store/selectors';
import { IProduct } from 'src/app/shared/interfaces/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items: IProduct[] = [];

  items$ = this.store.select(selectGlobalItems);

  constructor(private cartService: CartService, private store: Store<any>) {
    this.getItems();
  }

  getItems(): void {
    this.items = this.cartService.getItems();
  }
}
