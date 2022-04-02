import { Component } from '@angular/core';
import { ProductService } from 'src/app/products/services/product.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { IUser } from 'src/app/shared/interfaces/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: IUser | undefined;
  products!: IProduct[];

  get productsCount(): number {
    return this.products?.length;
  }

  constructor(
    private userService: AuthService,
    private productService: ProductService
  ) {
    this.getUserDetails();
    this.fetchMyProducts();
  }

  getUserDetails() {
    this.userService.getUserInfo().subscribe((user) => (this.user = user));
  }

  fetchMyProducts() {
    this.productService
      .getMyProducts()
      .subscribe((products) => (this.products = products));
  }
}
