import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/user-model';
import { UserServiceService } from '../../user-service.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'sa-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: User[];
  userEditing: boolean;
  currentUserEdited: User;
  displayedColumns: string[] = ['name', 'email', 'edit', 'delete'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private usersService: UserServiceService
  ) { }

  ngOnInit() {
    this.userEditing = false;
    this.currentUserEdited = null;
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

  editUser(user: User) {
    this.currentUserEdited = user;
    this.userEditing = true;
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
