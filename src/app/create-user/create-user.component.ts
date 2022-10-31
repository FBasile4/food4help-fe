import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service/user-service.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  submitted = false;

  constructor(private userService: UserServiceService, public router: Router, private _snackBar: MatSnackBar ){}

  ngOnInit(): void {  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.router.navigate(['home']);
  }
  login(){
    this.router.navigate(['home/login']);
  }
  backHome() {
    //this._location.back();
    this.router.navigate(['home']);
  }
  searchUsers(){
    this.router.navigate(['home/searchUsers']);
  }
  openSnackBar() {
    this._snackBar.open('Utente registrato con successo!', 'X', {
      duration: 60000,
      verticalPosition: 'top',
    });
  }


}
