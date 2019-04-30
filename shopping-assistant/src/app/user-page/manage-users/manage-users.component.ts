import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/user-model';
import { UserServiceService } from 'src/app/user-service.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'sa-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: User[];
  hide = true;
  displayedColumns: string[] = ['name', 'email', 'edit', 'delete'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private usersService: UserServiceService
  ) { }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((users) => {
      this.users = users;
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  addUser() {
    this.usersService.addUser(new User('', '', '')).subscribe((users) => {
      this.users = users;
      this.dataSource.data = this.users;
    });
  }

  deleteUser(user: User) {
    this.usersService.removeUser(user).subscribe((users) => {
      this.users = users;
      this.dataSource.data = this.users;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
