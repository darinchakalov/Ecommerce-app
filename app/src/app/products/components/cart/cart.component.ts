import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { clearGlobalState, removeItem } from 'src/app/+store/actions';
import { selectGlobalItems } from 'src/app/+store/selectors';
import { MessageService } from 'src/app/core/services/message.service';
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
    private router: Router,
    private messageService: MessageService
  ) {}

  getTotal() {
    return this.cartService.getTotal();
  }

  emptyCart(): void {
    this.store.dispatch(clearGlobalState());
    localStorage.removeItem('global');
  }

  finishOrder(): void {
    this.productService.finishOrder(this.cartService.items).subscribe({
      next: () => {
        this.messageService.animatedMessage(
          'Thank you for your order. We will ship it immediately'
        );
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },
      error: (err) => {
        console.log(err);
        this.messageService.errorMessage(err.error.message);
      },
    });
    this.emptyCart();
  }

  removeItemFromCart(item: any): void {
    this.store.dispatch(removeItem({ item: item }));
  }
}
