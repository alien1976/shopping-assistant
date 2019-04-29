import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product-model';
import { ProductsServiceService } from '../products-service.service';
import { Shop } from '../shops-model';
import { ShopsServiceService } from '../shops-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'sa-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input() shop: Shop;

  products: Product[];
  selectedProducts: Product[];
  totalPrice: number = 0;
  constructor(private route: ActivatedRoute,
    private productService: ProductsServiceService,
    private shopService: ShopsServiceService) { }

  ngOnInit() {
    this.selectedProducts = [];
    // TODO: get selected products for the user saved paths for ex.
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
    this.getShop();
  }

  getShop() {
    const name = this.route.snapshot.paramMap.get('name');

    this.shopService.getShop(name)
      .subscribe(shop => this.shop = shop);
  }

  productIsSelected(product: Product) {
    this.selectedProducts.push(product);
    this.calcTotalPrice();
  }

  productIsDeleted(product: Product) {
    const productIndex = this.selectedProducts.findIndex((el) => el.name === product.name);

    this.selectedProducts.splice(productIndex, 1);
    this.calcTotalPrice();
  }

  calcTotalPrice() {
    this.totalPrice = 0;

    this.selectedProducts.forEach((el) => {
      this.totalPrice += el.price;
    });
  }
}
