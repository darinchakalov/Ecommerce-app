import { Component, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IProduct } from 'src/app/shared/interfaces/product';
import { AuthService } from 'src/app/user/services/auth.service';
import Swal from 'sweetalert2';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: IProduct[] | undefined;
  @Input() length: number = 0;

  totalProducts!: number;

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get isAdmin(): boolean {
    return this.userService.user!.isAdmin;
  }

  constructor(
    private productService: ProductService,
    private userService: AuthService,
    private cartService: CartService
  ) {
    // this.fetchAllProducts();
    this.productService.getAllProductsPaginated(0, 10).subscribe((result) => {
      this.products = result.products;
      this.length = result.totalResults;
    });
  }

  fetchAllProducts(): void {
    this.productService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }

  addToCart(product: IProduct): void {
    this.cartService.addToCart(product, 1);
  }

  onPageChange(event: PageEvent) {
    console.log(event);

    const startIndex = event.pageIndex * event.pageSize;
    let limit = event.pageSize;
    this.productService
      .getAllProductsPaginated(startIndex, limit)
      .subscribe((result) => {
        this.products = result.products;
        this.length = result.totalResults;
      });
  }

  deleteProduct(productId: string): void {
    Swal.fire({
      title: 'Are you sure you want to delete this product?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(productId).subscribe({
          next: () => {
            this.fetchAllProducts();
            Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
          },
          error: (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${err.error.message}`,
            });
          },
        });
      }
    });
  }
}
