import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Box} from '../box';

import {BoxService} from '../box-service/box.service';
import {Observable} from 'rxjs';
import {UserServiceService} from '../user-service/user-service.service';
import {User} from '../user';

@Component({
  selector: 'app-box-published',
  templateUrl: './box-published.component.html',
  styleUrls: ['./box-published.component.css']
})
export class BoxPublishedComponent implements OnInit {

  boxes: Observable<Box[]>;
  userLogged: Observable<User[]>;

  constructor( private router: Router, private boxService: BoxService, private userService: UserServiceService) { }

  ngOnInit(): void {
    for (let index = 0; index < 10000; index++) {
      this.getBox();
    }
    for (let index = 0; index < 1; index++) {
      this.getUserLogged();
    }
  }

  //--------------NAVIGATE-----------
  backHome(){
    this.userService.deleteUser().subscribe(data => console.log(data));
    this.router.navigate(['home']);
  }
  reservations(){

  }

  boxPublished(){
    this.router.navigate(['home/workingActivity/boxAvailable']);
  }

  stayHome(){
    this.router.navigate(['home/workingActivity']);
  }
  //--------------------

  getBox(){
    this.boxes = this.boxService.getBoxList();
  }


  deleteBox(id: number){
    this.boxService.backCreateBox(id).subscribe(
      data => {
        console.log(data);
        this.getBox();
      },
      error => console.log(error));
  }

  getUserLogged(){
    this.userLogged = this.userService.getUserLogged();
    console.log("SONO L'UTENTE LOGGATO");
  }

}
