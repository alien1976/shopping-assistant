import { Component, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../user-model';
import { SharedServiceService } from '../shared-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'sa-toolbar',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="openMenu.emit()">
        <mat-icon>menu</mat-icon>
      </button>
      <ng-content></ng-content>
      <span class="example-spacer"></span>
      <div *ngIf="loggedIn">
        {{user.name}}
      </div>
      <div *ngIf="loggedIn">
        <a [routerLink]="['/users', user.name, {activeTab: 'shops'}]">
          <i class="material-icons cursor-pointer">
            star
          </i>
        </a>
      </div>
      <button mat-icon-button (click)="goBack()">
        <mat-icon>arrow_back_ios</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [
    `
    .example-spacer {
      flex: 1 1 auto;
    }

  `
  ]
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
  user: User;
  loggedIn: boolean;

  constructor(private sharedService: SharedServiceService, private usersService: UserServiceService) {
    this.sharedService.changeEmitted$.subscribe(
      user => {
        this.loggedIn = this.usersService.onUserStatusChanged(user);

        if (this.loggedIn) {
          this.user = JSON.parse(localStorage.getItem('currentUser'));
        }
      });
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
      this.user = JSON.parse(currentUser);
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
      this.user = new User('', '', '');
    }
  }

  goBack() {
    window.history.back();
  }
}
