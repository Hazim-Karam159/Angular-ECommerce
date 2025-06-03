import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  stock: number;
  rating: number;
  thumbnail: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

// Add this interface for categories
export interface Category {
  slug: string;
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(`${this.baseUrl}/products`);
  }

  // Update the return type to Category[]
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/products/categories`);
  }
}