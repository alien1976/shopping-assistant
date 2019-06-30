import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product-model';
import { User } from 'src/app/user-model';
import { MatSnackBar } from '@angular/material';
import { UserServiceService } from '../../users/user-service.service';

@Component({
  selector: 'sa-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() shopProducts: { shopName: string, products: Product[] };
  user: User;
  constructor(private snackBar: MatSnackBar, private userService: UserServiceService) { }

  ngOnInit() {
    this.user = window.localStorage.getItem('currentUser')
      ? JSON.parse(window.localStorage.getItem('currentUser'))
      : null;
  }

  isFavorite(product: Product) {
    if (this.user && this.user.favoriteProducts && this.user.favoriteProducts.length > 0) {
      const shopIndex = this.user.favoriteProducts.findIndex((el) => el.shopName === this.shopProducts.shopName);
      const productIndex = shopIndex !== -1
        ? this.user.favoriteProducts[shopIndex].products.findIndex((el) => el.name === product.name && el.price === product.price)
        : -1;

      return productIndex !== -1;
    } else {
      return false;
    }
  }

  addToFavorites(product: Product) {
    if (this.user && this.user.favoriteProducts && this.user.favoriteProducts.length > 0) {
      const shopIndex = this.user.favoriteProducts.findIndex((el) => el.shopName === this.shopProducts.shopName);

      if (shopIndex === -1) {
        this.user.favoriteProducts.push({ shopName: this.shopProducts.shopName, products: [product] });
      } else {
        this.user.favoriteProducts[shopIndex].products.push(product);
      }

      this.userService.updateUser(this.user);
      window.localStorage.setItem('currentUser', JSON.stringify(this.user));
      this.snackBar.open(product.name + ' is added to favorites!', '', {
        duration: 2000
      });
    } else {
      this.snackBar.open('To do this you should first log in!', '', {
        duration: 2000
      });
    }
  }

  removeFromFavorites(product: Product) {
    if (this.user) {
      const shopIndex = this.user.favoriteProducts.findIndex((el) => el.shopName === this.shopProducts.shopName);
      const productIndex = shopIndex !== -1
        ? this.user.favoriteProducts[shopIndex].products.findIndex((el) => el.name === product.name && el.price === product.price)
        : -1;

      this.user.favoriteProducts[shopIndex].products.splice(productIndex, 1);
      this.userService.updateUser(this.user);
      window.localStorage.setItem('currentUser', JSON.stringify(this.user));
      this.snackBar.open(product.name + ' is removed from favorites!', '', {
        duration: 2000
      });
    } else {
      this.snackBar.open('To do this you should first log in!', '', {
        duration: 2000
      });
    }
  }

}
