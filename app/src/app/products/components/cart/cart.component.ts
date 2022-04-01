import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items: IProduct[] = [];
  
  constructor(private cartService: CartService) {
    this.getItems();
  }

  getItems(): void {
    this.items = this.cartService.getItems();
  }
}
