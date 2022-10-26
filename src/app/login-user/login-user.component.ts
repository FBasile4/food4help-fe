import { Component,  OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';

import { Observable } from 'rxjs';
import { UserServiceService } from '../user-service/user-service.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {


  constructor(private _location: Location, private userService: UserServiceService) {  }
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required]);
    hide = true;
  ngOnInit(): void {

  }
  backHome() {
    this._location.back();
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  checkAccess(): void{
    console.log("Login component");
      this.userService.loginUser(this.email,this.password).subscribe(
        data => {
          console.log(JSON.stringify(data));
        }

      );

  }




}
