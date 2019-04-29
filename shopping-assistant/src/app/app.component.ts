import { Component } from '@angular/core';
import { User } from './user-model';
import { SharedServiceService } from './shared-service.service';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'sa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-assistant';
  showSidenav = false;
  loggedIn = false;
  user: User;

  constructor(private sharedService: SharedServiceService) {
    this.sharedService.changeEmitted$.subscribe(
      user => {
        this.onLoggedIn(user);
      });
  }

  openSidenav() {
    this.showSidenav = true;
  }
  closeSidenav() {
    this.showSidenav = false;
  }

  onLoggedIn(user: User) {
    this.loggedIn = true;
    this.user = user;
  }
}
