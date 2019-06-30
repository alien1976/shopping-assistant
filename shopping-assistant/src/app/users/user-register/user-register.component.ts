import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { User } from '../../user-model';

@Component({
  selector: 'sa-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  isLinear = false;
  hide = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private usersService: UserServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      userName: ['',
        [
          Validators.required,
          Validators.minLength(4),
          this.usersService.isUserPropExists('name', 'userNameExists')
        ]
      ]
    });
    this.secondFormGroup = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(4),
          this.usersService.isUserPropExists('email', 'emailExists')
        ]
      ]
    });
    this.thirdFormGroup = this.formBuilder.group({
      password: ['',
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ]
    });
  }

  onFinish() {
    const newUser = new User(
      this.firstFormGroup.get('userName').value,
      this.secondFormGroup.get('email').value,
      this.thirdFormGroup.get('password').value, '');

    this.usersService.addUser(newUser);
    this.router.navigate(['/login']);
  }

  getUserNameErrorMessage() {
    return this.firstFormGroup.get('userName').hasError('required') ? 'You must enter a value' :
      this.firstFormGroup.get('userName').hasError('userNameExists') ? 'This user name is already taken!' :
        '';
  }

  getEmailErrorMessage() {
    return this.secondFormGroup.get('email').hasError('required') ? 'You must enter a value' :
      this.secondFormGroup.get('email').hasError('emailExists') ? 'This email is used by another user!' :
        '';
  }
}
