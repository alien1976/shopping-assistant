import { Component, OnInit, ViewChild } from '@angular/core';
import { Shop } from 'src/app/shops-model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ShopsServiceService } from '../../../shops/shops-service.service';

@Component({
  selector: 'sa-manage-shops',
  templateUrl: './manage-shops.component.html',
  styleUrls: ['./manage-shops.component.css']
})
export class ManageShopsComponent implements OnInit {
  shops: Shop[];
  hide = true;
  displayedColumns: string[] = ['logo', 'name', 'edit', 'delete'];
  dataSource: MatTableDataSource<Shop>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private shopsService: ShopsServiceService
  ) { }

  ngOnInit() {
    this.shopsService.getAllShops().subscribe((shops) => {
      this.shops = shops;
      this.dataSource = new MatTableDataSource(shops);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  addShop() {
    this.shopsService.addShop(new Shop('', '', '')).subscribe((shops) => {
      this.shops = shops;
      this.dataSource.data = this.shops;
    });
  }

  deleteShop(shop: Shop) {
    this.shopsService.removeShop(shop).subscribe((shops) => {
      this.shops = shops;
      this.dataSource.data = this.shops;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
