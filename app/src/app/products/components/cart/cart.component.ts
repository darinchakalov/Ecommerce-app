import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { clearGlobalState, removeItem } from 'src/app/+store/actions';
import { selectGlobalItems } from 'src/app/+store/selectors';
import Swal from 'sweetalert2';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items: any;
  items$ = this.store.select(selectGlobalItems);

  constructor(
    private store: Store<any>,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  getTotal() {
    if (localStorage.getItem('global')) {
      let products = JSON.parse(localStorage.getItem('global')!).items;
      let prices = products.map((x: any) => x.product.price * x.productCount);
      return prices.reduce((prev: number, cur: number) => prev + cur, 0);
    }
  }

  emptyCart(): void {
    this.store.dispatch(clearGlobalState());
    localStorage.removeItem('global');
  }

  finishOrder(): void {
    this.productService.finishOrder(this.cartService.items).subscribe({
      next: () => {
        Swal.fire({
          title: 'Thank you for your order. We will ship it immediately',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.emptyCart();
  }

  removeItemFromCart(item: any): void {
    this.store.dispatch(removeItem({ item: item }));
  }
}
