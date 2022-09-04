import { IProduct } from './../models/IProduct';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  url = "http://localhost:3000"
  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<any> {
    // return [
    //   { title: `Nike Shoes - Jordans`, count: 150, price: 9.99, rating: 4.8 },
    //   { title: `Adidas Shoes - Blahblah`, count: 200, price: 12.99, rating: 3.9 },
    //   { title: `Rebook`, count: 150, price: 66.99, rating: 2.1 },
    //   { title: `Puma`, count: 150, price: 55.99, rating: 2.1 },
    // ];
    return this.httpClient.get(`${this.url}/products`);
  }

  createProduct(product: any): Observable<any> {
    return this.httpClient.post(`${this.url}/products`, product);
  }
}
