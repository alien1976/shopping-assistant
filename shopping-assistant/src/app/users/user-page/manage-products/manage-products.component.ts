import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Product } from 'src/app/product-model';
import { ProductsServiceService } from '../../../products/products-service.service';

@Component({
  selector: 'sa-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: Product[];
  hide = true;
  displayedColumns: string[] = ['logo', 'name', 'price', 'edit', 'delete'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private productsService: ProductsServiceService
  ) { }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
      this.dataSource = new MatTableDataSource(products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  addProduct() {
    this.productsService.addProduct(new Product('', '', 0, { x: 0, y: 0 })).subscribe((products) => {
      this.products = products;
      this.dataSource.data = this.products;
    });
  }

  deleteProduct(product: Product) {
    this.productsService.removeProduct(product).subscribe((products) => {
      this.products = products;
      this.dataSource.data = this.products;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
