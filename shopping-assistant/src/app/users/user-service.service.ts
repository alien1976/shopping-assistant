import { Injectable } from '@angular/core';
import { MOCK_USERS } from '../mock-data';
import { Observable, of } from 'rxjs';
import { User } from '../user-model';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  // private users = MOCK_USERS;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:9000/api/users')
      .pipe(
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  updateUser(user: User): Observable<User> {
    // const userIndex = this.users.findIndex((el) => {
    //   return el.name === oldUser.name;
    // });

    // this.users[userIndex] = user;
    // return of(this.users[userIndex]);
    const url = 'http://localhost:9000/api/users/' + user.name;
    return this.http.put<User>(url, user)
      .pipe(
        catchError(this.handleError('updateUser', user))
      );
  }

  removeUser(user: User): Observable<User> {
    const url = 'http://localhost:9000/api/users/' + user.name;

    return this.http.delete<User>(url)
      .pipe(
        catchError(this.handleError('removeUser', user))
      );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:9000/api/users', user)
      .pipe(
        catchError(this.handleError('addUser', user))
      );
  }

  getUser(name: string): Observable<User> {
    return this.http.get<User>(`http://localhost:9000/api/users/${name}`)
      .pipe(
        catchError(this.handleError<User>('getUsers', new User('', '', '', ''))
        ));
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:9000/api/auth/login`, user)
      .pipe(
        catchError(this.handleError<User>('login', user)
        ));
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:9000/api/auth/register`, user)
      .pipe(
        catchError(this.handleError<User>('register', user)
        ));
  }

  onUserStatusChanged(user: User): boolean {
    if (Object.keys(user).length > 0) {
      // if an user is logged
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    } else {
      // if an user logged out
      localStorage.removeItem('currentUser');
      return false;
    }
  }

  isUserPropExists(prop: string, formControlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const res = {};

      this.getAllUsers().subscribe((users) => {
        users.forEach((user) => {
          if (user[prop] === control.value) {
            res[formControlName] = true;
            return res;
          }
        });
      });
      return Object.keys(res).length >= 0 ? res : null;
    };
  }
}
