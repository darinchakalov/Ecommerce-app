import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/services/auth.service';
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
    private userService: AuthService,
    private router: Router
  ) {}

  create(): void {
    this.productService.createNewProduct(this.createForm?.value).subscribe({
      next: () => {
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
