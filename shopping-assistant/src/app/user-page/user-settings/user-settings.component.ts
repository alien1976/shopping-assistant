import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user-model';
import { UserServiceService } from 'src/app/user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedServiceService } from 'src/app/shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sa-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  @Input() user: User;
  users: User[];
  userSettingsForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder,
    private sharedService: SharedServiceService,
    private usersService: UserServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((users) => {
      this.users = users;
    });

    this.userSettingsForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.onReset();
  }

  onSave() {
    const userName = this.userSettingsForm.get('userName').value;
    const password = this.userSettingsForm.get('password').value;
    const email = this.userSettingsForm.get('email').value;
    const changes = { name: false, pass: false, email: false };

    if (this.user.name === userName && this.user.password === password && this.user.email === email) {
      console.log('same settings');
      // TODO: add error handling
      return false;
    }

    if (this.user.name !== userName) {
      changes.name = true;
    }

    if (this.user.password !== password) {
      changes.pass = true;
    }

    if (this.user.email !== email) {
      changes.email = true;
    }

    const userIndex = this.users.findIndex((user) => userName === user.name);
    const emailExists = () => {
      this.users.forEach((user) => {
        if (user.email === email) {
          return true;
        }
      });
      return false;
    };

    if (changes.name && !changes.email) {
      if (userIndex === -1) {
        this.updateUserSettings(userName, email, password);
      } else {
        this.userSettingsForm.get('userName').setErrors({
          exists: true
        });
      }
    } else if (changes.name && changes.email) {
      if (userIndex === -1) {
        if (!emailExists()) {
          this.updateUserSettings(userName, email, password);
        } else {
          this.userSettingsForm.get('email').setErrors({
            exists: true
          });
        }
      } else {
        this.userSettingsForm.get('userName').setErrors({
          exists: true
        });
      }
    } else if (!changes.name && changes.email) {
      if (!emailExists()) {
        this.updateUserSettings(userName, email, password);
      } else {
        this.userSettingsForm.get('email').setErrors({
          exists: true
        });
      }
    } else if (!changes.name && !changes.email && changes.pass) {
      this.updateUserSettings(userName, email, password);
    }
  }

  updateUserSettings(userName: string, email: string, password: string) {
    const newUser = new User(userName, email, password,
      this.user.isAdmin,
      this.user.favoriteProducts,
      this.user.favoriteShops);
    this.usersService.updateUser(this.user, newUser);
    this.user = newUser;
    this.sharedService.emitChange(newUser);
    this.router.navigate([`/users/${newUser.name}`]);
  }

  onReset() {
    this.userSettingsForm.setValue({
      userName: this.user.name,
      password: this.user.password,
      email: this.user.email
    });
  }

  getUserNameErrorMessage() {
    return this.userSettingsForm.get('userName').hasError('required') ? 'You must enter a value' :
      this.userSettingsForm.get('userName').hasError('exists') ? 'This user name is already used' :
        '';
  }

  getPasswordErrorMessage() {
    return this.userSettingsForm.get('password').hasError('required') ? 'You must enter a value' :
      this.userSettingsForm.get('password').hasError('notValid') ? 'Not a valid password' :
        '';
  }

  getEmailErrorMessage() {
    return this.userSettingsForm.get('email').hasError('required') ? 'You must enter a value' :
      this.userSettingsForm.get('email').hasError('email') ? 'Not a valid email' :
        this.userSettingsForm.get('email').hasError('exists') ? 'This email is used by another user' :
          '';
  }
}
