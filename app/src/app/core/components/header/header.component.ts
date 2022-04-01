import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/products/services/cart.service';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  get isLogged(): boolean {
    return this.userService.isLoggedIn;
  }

  get username(): string {
    return this.userService.user?.username || '';
  }

  get itemsCount(): number {
    console.log(this.cartService.items);

    return this.cartService.items.length;
  }

  constructor(
    private userService: AuthService,
    private router: Router,
    private cartService: CartService
  ) {}

  logout(): void {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
