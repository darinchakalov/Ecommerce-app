import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  @ViewChild(NgForm) createForm!: NgForm;

  constructor(private productService: ProductService, private router: Router) {}

  create(): void {
    if (this.createForm?.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are mandatory',
      });
      return;
    }
    this.productService.createNewProduct(this.createForm?.value).subscribe({
      next: () => {
        Swal.fire(
          'Edited!',
          'Your product has been created successfully.',
          'success'
        );
        this.router.navigate(['/products']);
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
  cancel() {
    this.router.navigate(['/products/my-products']);
  }
}
