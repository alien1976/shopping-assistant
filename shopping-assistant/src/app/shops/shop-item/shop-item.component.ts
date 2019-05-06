import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product-model';
import { ProductsServiceService } from '../../products-service.service';
import { Shop } from '../../shops-model';
import { ShopsServiceService } from '../../shops-service.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/user-model';

@Component({
  selector: 'sa-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input() shop: Shop;

  user: User;
  products: Product[];
  selectedProducts: Product[];
  totalPrice: number = 0;
  mapUrl: SafeResourceUrl;
  colorNames = ['red', 'green', 'blue', 'yellow'];
  currentDotCollor = 0;

  constructor(private route: ActivatedRoute,
    private productService: ProductsServiceService,
    private shopService: ShopsServiceService,
    private sanitizer: DomSanitizer) {
  }

  routeFormControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
    this.selectedProducts = [];
    this.user = window.localStorage.getItem('currentUser')
      ? JSON.parse(window.localStorage.getItem('currentUser'))
      : null;

    this.getShop();
  }

  getShop() {
    const name = this.route.snapshot.paramMap.get('name');

    this.shopService.getShop(name)
      .subscribe((shop) => {
        this.shop = shop;
        this.products = shop.products;
        this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.shop.map);
      });
  }

  productIsSelected(product: Product) {
    this.selectedProducts.push(product);
    this.addToPath(product);
    this.calcTotalPrice();
  }

  addToPath(product: Product) {
    const map = document.getElementById('map');
    const SvgDoc = (map as any).getSVGDocument().children[0];
    const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');

    ellipse.setAttribute('cx', product.coords.x.toString());
    ellipse.setAttribute('cy', product.coords.y.toString());
    ellipse.setAttribute('rx', '15');
    ellipse.setAttribute('ry', '15');
    ellipse.setAttribute('fill', this.colorNames[this.currentDotCollor]);
    ellipse.setAttribute('matTooltip', product.name + '|' + product.price);
    SvgDoc.appendChild(ellipse);

    if (this.currentDotCollor >= this.colorNames.length - 1) {
      this.currentDotCollor = 0;
    } else {
      this.currentDotCollor++;
    }
  }

  removeFromPath(product: Product) {
    const map = document.getElementById('map');
    const SvgDoc = (map as any).getSVGDocument().children[0];
    const ellipses = SvgDoc.querySelectorAll('ellipse');
    const ellipsesLength = ellipses.length;

    if (this.currentDotCollor > 0) {
      this.currentDotCollor--;
    }

    for (let i = 0; i < ellipsesLength; i++) {
      if (ellipses[i].getAttribute('cx') === product.coords.x.toString()
        && ellipses[i].getAttribute('cy') === product.coords.y.toString()) {
        ellipses[i].remove();
        break;
      }
    }
  }

  productIsDeleted(product: Product) {
    const productIndex = this.selectedProducts.findIndex((el) => el.name === product.name);

    this.selectedProducts.splice(productIndex, 1);
    this.removeFromPath(product);
    this.calcTotalPrice();
  }

  calcTotalPrice() {
    this.totalPrice = 0;

    this.selectedProducts.forEach((el) => {
      this.totalPrice += el.price;
    });
  }

  onProductsCategoryChange(value: string) {
    switch (value) {
      case 'shopProducts': {
        this.products = this.shop.products;
        break;
      }
      case 'favoriteProducts': {
        const shopIndex = this.user.favoriteProducts.findIndex((el) => el.shopName === this.shop.name);

        this.products = shopIndex !== -1 ? this.user.favoriteProducts[shopIndex].products : [];
        break;
      }
      default: break;
    }
  }
}
