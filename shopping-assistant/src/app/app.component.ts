import { Component } from '@angular/core';

@Component({
  selector: 'sa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-assistant';
  showSidenav = false;
  loggedIn = false;

  openSidenav() {
    this.showSidenav = true;
  }
  closeSidenav() {
    this.showSidenav = false;
  }
}
