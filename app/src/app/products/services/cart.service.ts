import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addExistingItem,
  addItem,
  incrementCounter,
} from 'src/app/+store/actions';
import { selectGlobalItems } from 'src/app/+store/selectors';
import { MessageService } from 'src/app/core/services/message.service';
import { IProduct } from 'src/app/shared/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  currentCartItems = JSON.parse(localStorage.getItem('global')!).items;
  items: any[] | undefined;

  constructor(
    private store: Store<any>,
    private messageService: MessageService
  ) {
    let items$ = this.store.select(selectGlobalItems);
    items$.subscribe((items) => (this.items = items));
  }

  getProductsCount(): void {
    if (this.items) {
      let sum = this.items?.reduce((prev, cur) => prev + cur.productCount, 0);
      this.store.dispatch(incrementCounter({ count: sum }));
    } else {
      this.store.dispatch(incrementCounter({ count: 0 }));
    }
  }

  isAlreadyAdded(product: IProduct): boolean {
    return this.items!.some((x: any) => x.product._id == product._id);
  }

  getCurrentCount(product: IProduct): number {
    let currentItem = this.items!.find(
      (x: any) => x.product._id == product._id
    );
    return currentItem.productCount;
  }

  addToCart(product: IProduct, productCount: number): void {
    if (this.isAlreadyAdded(product)) {
      let currentCount = this.getCurrentCount(product);
      this.store.dispatch(
        addExistingItem({
          item: product,
          productCount: currentCount + productCount,
        })
      );
    } else {
      this.store.dispatch(
        addItem({ item: product, productCount: productCount })
      );
    }
    this.getProductsCount();
    this.messageService.successMessage('Product was added to cart');
  }

  getTotal(): number {
    if (this.items) {
      let prices = this.items.map((x) => x.product.price * x.productCount);
      return prices.reduce((prev: number, cur: number) => prev + cur, 0);
    } else {
      return 0;
    }
  }
}
