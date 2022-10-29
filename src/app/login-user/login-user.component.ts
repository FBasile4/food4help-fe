import { Component,  OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';

import { Observable } from 'rxjs';
import { UserServiceService } from '../user-service/user-service.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  user: User;


  constructor(private _location: Location, private userService: UserServiceService, private router: Router) {  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  ngOnInit(): void {  }
  backHome() {
    //this._location.back();
    this.router.navigate(['home']);
  }
  register(){
    this.router.navigate(['home/register']);
  }
  searchUsers(){
    this.router.navigate(['home/searchUsers']);
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  checkAccess(): void{
    console.log("Login component", this.email, this.password);
    this.email.value == this.user.email
      this.userService.loginUser(this.user).subscribe(
        data => console.log(data), error => console.log(error));
    this.router.navigate(['home/workingActivity']);
  }




}
