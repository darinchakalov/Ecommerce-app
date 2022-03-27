import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/shared/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  createNewProduct(data: any) {
    return this.http.post<IProduct>(`http://localhost:3030/products`, data);
  }
}
