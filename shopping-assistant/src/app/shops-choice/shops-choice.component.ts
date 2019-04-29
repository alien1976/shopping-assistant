import { Component, OnInit } from '@angular/core';
import { ShopsServiceService } from '../shops-service.service';
import { Shop } from '../shops-model';

@Component({
  selector: 'sa-shops-choice',
  templateUrl: './shops-choice.component.html',
  styleUrls: ['./shops-choice.component.css']
})
export class ShopsChoiceComponent implements OnInit {

  shops: Shop[];
  constructor(private shopsService: ShopsServiceService) { }

  ngOnInit() {
    this.shopsService.getAllShops().subscribe((shops) => {
      this.shops = shops;
    });
  }

}
