import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Product, ProductResponse } from '../models/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.apiUrl + '/products');
  }
}
