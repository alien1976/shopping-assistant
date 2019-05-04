import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopsChoiceComponent } from './shops/shops-choice/shops-choice.component';
import { ShopItemComponent } from './shops/shop-item/shop-item.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { ProductsPageComponent } from './products/products-page/products-page.component';


const routes: Routes = [
  { path: 'shops', component: ShopsChoiceComponent },
  { path: 'shops/:name', component: ShopItemComponent },
  { path: 'users/:name', component: UserPageComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: '', redirectTo: '/shops', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
