import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  @ViewChild(NgForm) createForm: NgForm | undefined;

  constructor(private productService: ProductService) {}

  create(): void {
    this.productService.createNewProduct(this.createForm?.value).subscribe({
      next: () => {
        console.log('ok');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
