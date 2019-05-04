import { Component, OnInit } from '@angular/core';
import { ShopsServiceService } from '../../shops-service.service';
import { Shop } from '../../shops-model';
import { Product } from '../../product-model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'sa-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  shops: Shop[];
  maxProductPrice: number;
  searchValue: string;
  priceForm: FormGroup;
  currentShopProducts: { shopName: string, products: Product[] }[];
  topNavigationButton = false;

  constructor(private shopsService: ShopsServiceService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.currentShopProducts = [];
    this.maxProductPrice = 0;
    this.searchValue = '';
    this.shopsService.getAllShops().subscribe((shops) => {
      this.shops = shops;
      this.shops.forEach((shop) => {
        this.getMaxProductsPrice(shop.products);
        this.priceForm = this.fb.group({
          minPrice: [0, Validators.min(0)],
          maxPrice: [this.maxProductPrice, Validators.max(this.maxProductPrice)]
        });
        this.priceForm.get('minPrice').setValidators(Validators.max(this.priceForm.get('maxPrice').value));
        this.priceForm.get('maxPrice').setValidators(Validators.min(this.priceForm.get('minPrice').value));
        this.currentShopProducts.push({ shopName: shop.name, products: shop.products });
      });
    });
  }

  getMaxProductsPrice(products: Product[]) {
    products.forEach((product) => {
      if (this.maxProductPrice < product.price) {
        this.maxProductPrice = product.price;
      }
    });
  }

  onShopChanged(checked: boolean, selectedShop: Shop) {
    if (checked) {
      const shopIndex = this.shops.findIndex((el) => el.name === selectedShop.name);

      this.currentShopProducts.splice(shopIndex, 0, { shopName: selectedShop.name, products: selectedShop.products });
    } else {
      const shopIndex = this.currentShopProducts.findIndex((el) => el.shopName === selectedShop.name);

      this.currentShopProducts.splice(shopIndex, 1);
    }
    this.shopProductsFilter();
  }

  shopProductsFilter() {
    this.shops.forEach((shop) => {
      const shopIndex = this.currentShopProducts.findIndex((el) => el.shopName === shop.name);

      if (shopIndex !== -1) {
        this.currentShopProducts[shopIndex].products = [];
        this.currentShopProducts[shopIndex].products = shop.products.filter((product) => {
          // tslint:disable-next-line: no-unused-expression
          return this.keyWordCondition(product) && this.priceCondition(product);
        });
      }
    });
  }

  priceCondition(product: Product) {
    const minPrice = this.priceForm.get('minPrice').value;
    const maxPrice = this.priceForm.get('maxPrice').value;

    return minPrice <= maxPrice && product.price >= minPrice && product.price <= maxPrice;
  }

  keyWordCondition(product: Product) {
    const value = this.searchValue;

    return value !== ''
      ? product.name.toLowerCase().indexOf(value) !== -1
      : true;
  }

  topFunction() {
    const element = document.querySelector('mat-toolbar');
    element.scrollIntoView();
  }

}
