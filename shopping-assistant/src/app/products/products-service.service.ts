import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_PRODUCTS } from '../mock-data';
import { Product } from '../product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  private products = MOCK_PRODUCTS;
  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return of(this.products);
  }

  updateProduct(shop: Product): Observable<Product> {
    const shopIndex = this.products.findIndex((el) => {
      return el.name === shop.name;
    });

    this.products[shopIndex] = shop;
    return of(this.products[shopIndex]);
  }

  removeProduct(shop: Product): Observable<Product[]> {
    const shopIndex = this.products.findIndex((el) => {
      return el.name === shop.name;
    });

    this.products.splice(shopIndex, 1);
    return of(this.products);
  }

  addProduct(shop: Product): Observable<Product[]> {
    this.products.push(shop);
    return of(this.products);
  }
}
