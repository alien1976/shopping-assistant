import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopsChoiceComponent } from './shops-choice/shops-choice.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationModule } from './navigation/navigation.module';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductSearchBarComponent } from './product-search-bar/product-search-bar.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserSettingsComponent } from './user-page/user-settings/user-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopsChoiceComponent,
    ShopItemComponent,
    ProductSearchBarComponent,
    UserLoginComponent,
    UserPageComponent,
    UserSettingsComponent
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