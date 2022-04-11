import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product';
import Swal from 'sweetalert2';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  @ViewChild(NgForm) form!: NgForm;

  product: IProduct | undefined;

  id = this.activatedRoute.snapshot.params['productId'];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.fetchProduct();
  }

  fetchProduct() {
    this.productService
      .getSingleProduct(this.id)
      .subscribe((product) => (this.product = product));
  }

  edit() {
    if (this.form.controls.name.value === '') {
      this.form.controls.name.setValue(this.product?.name);
    }
    if (this.form.controls.price.value === '') {
      this.form.controls.price.setValue(this.product?.price);
    }
    if (this.form.controls.quantity.value === '') {
      this.form.controls.quantity.setValue(this.product?.quantity);
    }
    if (this.form.controls.imgUrl.value === '') {
      this.form.controls.imgUrl.setValue(this.product?.imgUrl);
    }
    if (this.form.controls.description.value === '') {
      this.form.controls.description.setValue(this.product?.description);
    }

    Swal.fire({
      title: 'Are you sure you want to edit this product?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, edit it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.editProduct(this.id, this.form.value).subscribe({
          next: () => {
            Swal.fire(
              'Edited!',
              'Your product has been edited successfully.',
              'success'
            );
            this.router.navigate(['/products/my-products']);
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

  cancel() {
    this.router.navigate(['/products']);
  }
}
