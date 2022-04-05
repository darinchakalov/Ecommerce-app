import { Component } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import Swal from 'sweetalert2';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css'],
})
export class MyProductsComponent {
  products: IProduct[] = [];

  get hasProducts(): boolean {
    console.log(this.products?.length);

    return this.products?.length > 0;
  }

  constructor(private productService: ProductService) {
    this.fetchMyProducts();
  }

  fetchMyProducts(): void {
    this.productService
      .getMyProducts()
      .subscribe((products) => (this.products = products));
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
            this.fetchMyProducts();
            Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
          },
          error: (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${err}`,
              // footer: '<a href="">Why do I have this issue?</a>',
            });
          },
        });
      }
    });
  }
}
