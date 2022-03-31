import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/shared/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  createNewProduct(data: any) {
    return this.http.post<IProduct>(`/api/products`, data);
  }

  getAllProducts(limit?: number) {
    const query = limit ? `?limit=${limit}` : '';
    return this.http.get<IProduct[]>(`/api/products${query}`);
  }
}
