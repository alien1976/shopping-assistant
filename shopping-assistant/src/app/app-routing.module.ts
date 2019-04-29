import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopsChoiceComponent } from './shops-choice/shops-choice.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { UserLoginComponent } from './user-login/user-login.component'


const routes: Routes = [
  { path: 'shops', component: ShopsChoiceComponent },
  { path: 'shops/:name', component: ShopItemComponent },
  { path: 'login', component: UserLoginComponent },
  { path: '', redirectTo: '/shops', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
