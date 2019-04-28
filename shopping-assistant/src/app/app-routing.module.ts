import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopsChoiceComponent } from './shops-choice/shops-choice.component';


const routes: Routes = [
  { path: 'shops', component: ShopsChoiceComponent },
  { path: '', redirectTo: '/shops', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
