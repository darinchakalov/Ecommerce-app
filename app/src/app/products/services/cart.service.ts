import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IProduct[] = [];

  constructor() {}

  addToCart(product: any) {
    this.items.push({ ...product, num: 1 });
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
