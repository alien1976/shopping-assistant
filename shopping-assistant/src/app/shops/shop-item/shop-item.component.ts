import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product-model';
import { ProductsServiceService } from '../../products-service.service';
import { Shop } from '../../shops-model';
import { ShopsServiceService } from '../../shops-service.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

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
    private shopService: ShopsServiceService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.selectedProducts = [];
    // TODO: get selected products for the user saved paths for ex.
    this.getShop();
  }

  getShop() {
    const name = this.route.snapshot.paramMap.get('name');

    this.shopService.getShop(name)
      .subscribe((shop) => {
        this.shop = shop;
        this.products = shop.products;
      });
  }

  mapUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.shop.map);
  }

  productIsSelected(product: Product) {
    this.selectedProducts.push(product);
    // this.addToPath(product);
    this.calcTotalPrice();
  }

  addToPath(product: Product) {
    // const map = document.getElementById('map');
    // const SvgDoc = map.getSVGDocument().children[0];
    // const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');

    // ellipse.setAttribute('cx', '150');
    // ellipse.setAttribute('cy', '150');
    // ellipse.setAttribute('rx', '15');
    // ellipse.setAttribute('ry', '15');
    // ellipse.setAttribute('fill', 'rgb(255, 255, 255)');
    // SvgDoc.appendChild(ellipse);
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
