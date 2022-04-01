import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product';
import { AuthService } from 'src/app/user/services/auth.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  product: IProduct | undefined;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.fetchProduct();
  }

  fetchProduct(): void {
    const id = this.activatedRoute.snapshot.params['productId'];

    this.productService
      .getSingleProduct(id)
      .subscribe((product) => (this.product = product));
  }
}
