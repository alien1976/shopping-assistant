import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shop } from './shops-model';
import { MOCK_SHOPS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class ShopsServiceService {
  private shops = MOCK_SHOPS;

  constructor() { }

  getAllShops(): Observable<Shop[]> {
    return of(this.shops);
  }

  updateShop(shop: Shop): Observable<Shop> {
    const shopIndex = this.shops.findIndex((el) => {
      return el.name === shop.name;
    });

    this.shops[shopIndex] = shop;
    return of(this.shops[shopIndex]);
  }

  removeShop(shop: Shop): Observable<Shop[]> {
    const shopIndex = this.shops.findIndex((el) => {
      return el.name === shop.name;
    });

    this.shops.splice(shopIndex, 1);
    return of(this.shops);
  }

  addShop(shop: Shop): Observable<Shop[]> {
    this.shops.push(shop);
    return of(this.shops);
  }
}
