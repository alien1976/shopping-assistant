import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopsChoiceComponent } from './shops/shops-choice/shops-choice.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationModule } from './navigation/navigation.module';
import { ShopItemComponent } from './shops/shop-item/shop-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductSearchBarComponent } from './products/product-search-bar/product-search-bar.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserPageComponent } from './users/user-page/user-page.component';
import { UserSettingsComponent } from './users/user-page/user-settings/user-settings.component';
import { ManageUsersComponent } from './users/user-page/manage-users/manage-users.component';
import { ManageShopsComponent } from './users/user-page/manage-shops/manage-shops.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { ManageProductsComponent } from './users/user-page/manage-products/manage-products.component';
import { ProductsPageComponent } from './products/products-page/products-page.component';
import { ProductCardComponent } from './products/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopsChoiceComponent,
    ShopItemComponent,
    ProductSearchBarComponent,
    UserLoginComponent,
    UserPageComponent,
    UserSettingsComponent,
    ManageUsersComponent,
    ManageShopsComponent,
    UserRegisterComponent,
    ManageProductsComponent,
    ProductsPageComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    ScrollingModule,
    MatTooltipModule,
    MatStepperModule,
    MatCheckboxModule,
    MatTableModule,
    MatExpansionModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    NavigationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
