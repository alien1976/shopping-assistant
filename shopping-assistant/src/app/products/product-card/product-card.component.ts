import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product-model';

@Component({
  selector: 'sa-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() shopProducts: { shopName: string, products: Product[] };
  constructor() { }

  ngOnInit() {
  }

}
