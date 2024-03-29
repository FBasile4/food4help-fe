import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service/user-service.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  name: string;
  userList: User[];

  constructor(private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.name = '';
  }

  //------NAVIGATE -----
  backHome() {
    //this._location.back();
    this.router.navigate(['home']);
  }
  register(){
    this.router.navigate(['home/charity/create']);
  }
  login(){
    this.router.navigate(['home/login']);
  }
//----------------

  private searchUsers() {
    this.userService.getUsersWorkingActivityByName(this.name)
      .subscribe(userList =>
        {this.userList = userList;
          if(this.userList.length === 0){
            console.log("La lista NON HA ELEMENTI");
          }else {
            console.log("La lista ha:", this.userList);
          }
        }
      );

  }
  onSubmit() {
    this.searchUsers();
  }

}
