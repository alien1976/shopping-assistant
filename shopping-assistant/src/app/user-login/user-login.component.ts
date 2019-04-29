import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user-model';
import { UserServiceService } from '../user-service.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'sa-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;

  users: User[];
  @Output() logged = new EventEmitter<User>();
  constructor(private usersService: UserServiceService,
    private sharedService: SharedServiceService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.usersService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  onLogin() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    const userIndex = this.users.findIndex((user) => userName === user.name);

    if (userIndex !== -1) {
      if (this.users[userIndex].password === password) {
        this.sharedService.emitChange(this.users[userIndex]);
      } else {
        this.loginForm.get('password').setErrors({
          notValid: true
        });
      }
    } else {
      this.loginForm.get('userName').setErrors({
        notValid: true
      });
    }
  }

  getUserNameErrorMessage() {
    return this.loginForm.get('userName').hasError('required') ? 'You must enter a value' :
      this.loginForm.get('userName').hasError('notValid') ? 'Not a valid user name' :
        '';
  }

  getPasswordErrorMessage() {
    return this.loginForm.get('password').hasError('required') ? 'You must enter a value' :
      this.loginForm.get('password').hasError('notValid') ? 'Not a valid password' :
        '';
  }
}
