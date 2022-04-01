import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IProduct[] = [];

  itemsCount: number = 0;

  constructor() {}

  addToCart(product: any) {
    this.itemsCount++;
    this.items.push({ ...product, num: 1 });
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.itemsCount = 0;
    return this.items;
  }
}
