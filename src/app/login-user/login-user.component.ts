import { Component,  OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';

import { Observable } from 'rxjs';
import { UserServiceService } from '../user-service/user-service.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  user: User;
  userpwd: string;

  constructor(private _location: Location, private userService: UserServiceService, private router: Router,  private _snackBar: MatSnackBar) {

  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  ngOnInit(): void {
    this.userpwd = '';
  }
  //----------NAVIGATE
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

  goWorkingAct(){
    this.router.navigate(['home/workingActivity']);
  }
  //-------------------

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  checkAccess(): void{
    console.log("Email", this.email.value);
    console.log("Password", this.password.value);
    if(this.email.value != ' '){
      if(this.password.value != null){
        this.userpwd = this.email.value + '_' + this.password.value;
        console.log(this.userpwd);
        this.userService.loginUser(this.userpwd).subscribe(
          userpwd => console.log(this.userpwd), error => console.log(error));
        this.router.navigate(['home/workingActivity']);
      }
    }else{
      this.openSnackBar();
    }
  }

  openSnackBar() {
    this._snackBar.open('Inserire e-mail e password', 'X', {
      duration: 60000,
      verticalPosition: 'top',
    });
  }




}
