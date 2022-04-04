import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectGlobalItems } from 'src/app/+store/selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items: any;
  items$ = this.store.select(selectGlobalItems);

  constructor(private store: Store<any>) {}

  emptyCart(): void {
    localStorage.clear();
    location.reload();
  }
}
