import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getAllProductsPaginated(startIndex: number, limit: number) {
    return this.http.get<any>(`/api/products/list`, {
      params: new HttpParams({
        fromObject: {
          startIndex,
          limit,
        },
      }),
    });
  }

  getSingleProduct(id: string) {
    return this.http.get<IProduct>(`/api/products/${id}`);
  }

  getMyProducts() {
    return this.http.get<IProduct[]>(`/api/products/my-products`);
  }

  deleteProduct(id: string) {
    return this.http.delete<IProduct>(`/api/products/${id}`);
  }

  editProduct(id: string, data: any) {
    return this.http.put<IProduct>(`/api/products/${id}`, data);
  }

  finishOrder(products: any) {
    return this.http.put<{ product: IProduct; productCount: number }[]>(
      `/api/products/finish`,
      products
    );
  }
}
