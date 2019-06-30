import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../user-model';
import { UserServiceService } from '../user-service.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SharedServiceService } from '../../shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sa-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;

  users: User[];
  @Output() logged = new EventEmitter<User>();
  constructor(private usersService: UserServiceService,
    private sharedService: SharedServiceService,
    private fb: FormBuilder,
    private router: Router) { }

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

    this.usersService.login(new User(userName, '', password, '')).subscribe(
      data => {
        if (data) {
          if (data.password === password) {
            this.sharedService.emitChange(data);
            this.router.navigate([`/users/${data.name}`]);
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
      },
      err => {
        console.log(err)
      });

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
