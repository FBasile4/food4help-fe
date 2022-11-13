import { Component,  OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormControl, Validators } from '@angular/forms';

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

  userpwd: any;

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
    this.router.navigate(['home/workingActivity/create']);
  }
  searchUsers(){
    this.router.navigate(['home/searchUsers']);
  }

  goWorkingAct(){
    this.router.navigate(['home/workingActivity']);
  }

  goCharity(){
    this.router.navigate(['home/charity']);
  }

  stayLogin(){
    this.router.navigate(['home/login']);
  }
  //-------------------

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  checkAccessWorkingAcivity(): void{
    console.log("Email", this.email.value);
    console.log("Password", this.password.value);
    if(this.email.value !== ' '){
      if(this.password.value !== ' '){
        this.userpwd = this.email.value + '_' + this.password.value;
        this.userService.loginUserW(this.userpwd).subscribe(
          userpwd => {
              if(userpwd !== null){
                console.log(userpwd);
                userpwd = this.userpwd;
                this.goWorkingAct();
              }else{
                this.checkAccessCharity();
                console.log('Nessun utente WORKING presente nel DB');
              }
            },
            error => console.log(error)
        );
      }
      this.openSnackBar();
    }
    this.openSnackBar();
  }

  checkAccessCharity(){
      this.userpwd = this.email.value + '_' + this.password.value;
      this.userService.loginUserC(this.userpwd).subscribe(
        userpwd => {
          if(userpwd !== null){
            console.log(userpwd);
            userpwd = this.userpwd;
            this.goCharity();
          }else{
            console.log('Nessun utente presente nel DB');
            this.openSnackBar();
          }
        },
        error => console.log(error)
      );
  }

  openSnackBar() {
    this._snackBar.open('I dati inseriti sono errati o mancati', 'X', {
      duration: 5000,
      verticalPosition: 'top',
    });
  }




}
