import { Injectable } from '@angular/core';
import { MOCK_USERS } from './mock-data';
import { Observable, of } from 'rxjs';
import { User } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private users = MOCK_USERS;

  constructor() { }

  getAllUsers(): Observable<User[]> {
    return of(this.users);
  }

  updateUser(user: User): Observable<User> {
    const userIndex = this.users.findIndex((el) => {
      return el.name === user.name;
    });

    this.users[userIndex] = user;
    return of(this.users[userIndex]);
  }

  removeUser(user: User): Observable<User[]> {
    const userIndex = this.users.findIndex((el) => {
      return el.name === user.name;
    });

    this.users.splice(userIndex, 1);
    return of(this.users);
  }

  addUser(user: User): Observable<User[]> {
    this.users.push(user);
    return of(this.users);
  }

  getUser(name: string): Observable<User> {
    const userIndex = this.users.findIndex((el) => {
      return el.name === name;
    });

    return of(this.users[userIndex]);
  }
}
