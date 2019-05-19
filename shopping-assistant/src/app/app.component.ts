import { Component } from '@angular/core';
import { User } from './user-model';
import { SharedServiceService } from './shared-service.service';
import { UserServiceService } from './users/user-service.service';

@Component({
  selector: 'sa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-assistant';
  showSidenav = false;
  loggedIn = localStorage.getItem('currentUser') ? true : false;
  user: User = !localStorage.getItem('currentUser') ? new User('', '', '') : JSON.parse(localStorage.getItem('currentUser'));

  constructor(private sharedService: SharedServiceService, private usersService: UserServiceService) {
    this.sharedService.changeEmitted$.subscribe(
      user => {
        this.loggedIn = this.usersService.onUserStatusChanged(user);

        if (this.loggedIn) {
          this.user = JSON.parse(localStorage.getItem('currentUser'));
        }
      });
  }

  ngOninit() {

  }

  openSidenav() {
    this.showSidenav = true;
  }
  closeSidenav() {
    this.showSidenav = false;
  }

  onLoggedOut() {
    this.sharedService.emitChange({});
  }
}
