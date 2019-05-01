import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { User } from '../user-model';

@Component({
  selector: 'sa-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: User;
  activeTabIndex: number;
  selected = 'Favorite products';
  tabs = [
    'settings',
    'products',
    'shops',
    'routes',
    'manageUsers',
    'manageShops',
    'manageProducts'
  ];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private usersService: UserServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const userName = params.name;
        const activeTab = params.activeTab;
        const activeTabIndex = this.tabs.indexOf(activeTab);

        this.activeTabIndex = activeTabIndex !== -1 ? activeTabIndex : 0;
        this.usersService.getUser(userName).subscribe((user) => {
          this.user = user;
        });
      }
    );
  }

  onTabChange(event: any) {
    this.activeTabIndex = event.index;
    this.router.navigate([`/users/${this.user.name}`, { activeTab: this.tabs[this.activeTabIndex] }]);
  }
}
