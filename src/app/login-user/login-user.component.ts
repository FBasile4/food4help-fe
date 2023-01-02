import {Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormControl, Validators } from '@angular/forms';

import { UserServiceService } from '../user-service/user-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  userpwd: any;
  //socialUser!: SocialUser;

  constructor( private _location: Location, private userService: UserServiceService, private router: Router,  private _snackBar: MatSnackBar) {

  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  ngOnInit(): void {
    this.userpwd = '';
   /* this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
    });*/
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: "979769705409-k121a2je2ipt973h44enjktudhp8qlj0.apps.googleusercontent.com",
      callback: this.handleCredentialResponse.bind(this),
      auto_select: false,
      cancel_on_tap_outside: true,
    });
    // @ts-ignore
    google.accounts.id.renderButton(
      // @ts-ignore
      document.getElementById("google-button"),
      { theme: "outline", size: "large", width: "100%" }
    );
    // @ts-ignore
    google.accounts.id.prompt((notification: PromptMomentNotification) => {});
  }
  async handleCredentialResponse(response: any) {
    // Here will be your response from Google.
    console.log(response);
    console.log(response.clientId);
    this.userService.sendCredential(response.clientId).subscribe(result =>
      {
        if(result !== null ){
          console.log(result);
          this.goWorkingAct();
        }else{
          this.openSnackBar();
        }
      }, error => console.log(error) );

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
                this.userpwd= userpwd;
                this.userService.saveUserLogged(this.userpwd).subscribe(logged =>{
                    console.log("Sono loggato:", logged)
                } );
                this.goWorkingAct();
              }else{
                this.checkAccessCharity();
                console.log('Nessun utente WORKING presente nel DB');
              }
            },
            error => console.log(error)
        );
      }else{
        this.openSnackBar();
      }
    }else{
      this.openSnackBar();
    }
    if(this.email.value == ' ' && this.password.value == ' ') {
      this.openSnackBar();
    }

  }

  checkAccessCharity(){
      this.userpwd = this.email.value + '_' + this.password.value;
      this.userService.loginUserC(this.userpwd).subscribe(
        userpwd => {
          if(userpwd !== null){
            console.log(userpwd);
            this.userpwd = userpwd;
            this.userService.saveUserLogged(this.userpwd).subscribe(logged =>{
              console.log("Sono loggato:", logged)
            } );
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

  /*loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }*/


}
