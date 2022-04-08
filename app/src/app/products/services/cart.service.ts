import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addExistingItem, addItem } from 'src/app/+store/actions';
import { IProduct } from 'src/app/shared/interfaces/product';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private store: Store) {}
  currentCartItems = JSON.parse(localStorage.getItem('global')!).items;

  isAlreadyAdded(product: IProduct): boolean {
    return this.currentCartItems.some((x: any) => x.product._id == product._id);
  }

  getCurrentCount(product: IProduct): number {
    let currentItem = this.currentCartItems.find(
      (x: any) => x.product._id == product._id
    );
    return currentItem.productCount;
  }

  addToCart(product: IProduct): void {
    if (this.isAlreadyAdded(product)) {
      let currentCount = this.getCurrentCount(product);
      this.store.dispatch(
        addExistingItem({ item: product, productCount: currentCount + 1 })
      );
    } else {
      this.store.dispatch(addItem({ item: product, productCount: 1 }));
    }
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Product was added to cart',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
