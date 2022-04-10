import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/services/message.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  @ViewChild(NgForm) createForm!: NgForm;

  constructor(
    private productService: ProductService,
    private router: Router,
    private messageService: MessageService
  ) {}

  create(): void {
    if (this.createForm?.invalid) {
      this.messageService.errorMessage('All fields are mandatory');
      return;
    }
    this.productService.createNewProduct(this.createForm?.value).subscribe({
      next: () => {
        this.messageService.successMessage(
          'Your product has been created successfully.'
        );
        this.router.navigate(['/products']);
      },
      error: (err) => {
        this.messageService.errorMessage(err.error.message);
      },
    });
  }
  cancel() {
    this.router.navigate(['/products/my-products']);
  }
}
