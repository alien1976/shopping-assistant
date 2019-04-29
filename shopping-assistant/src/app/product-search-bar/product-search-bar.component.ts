import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product-model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'sa-product-search-bar',
  templateUrl: './product-search-bar.component.html',
  styleUrls: ['./product-search-bar.component.css']
})
export class ProductSearchBarComponent implements OnInit {
  @Input() products: Product[];
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onProductSelected = new EventEmitter<Product>();

  productsControl = new FormControl();
  filteredProducts: Observable<Product[]>;

  constructor() {
    this.filteredProducts = this.productsControl.valueChanges
      .pipe(
        startWith(''),
        map(product => product ? this.filterProducts(product) : this.products.slice())
      );
  }

  ngOnInit() {

  }

  filterProducts(value: string) {
    const filterValue = value.toLowerCase();

    return this.products.filter(product => product.name.toLowerCase().indexOf(filterValue) === 0);
  }

  productSelected(product: Product) {
    this.productsControl.setValue('');
    const activeElement = document.activeElement as HTMLElement;

    if (activeElement) {
      activeElement.blur();
    }

    this.onProductSelected.emit(product);
  }
}
