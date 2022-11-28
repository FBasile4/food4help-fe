import {Component, Input, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogBoxSummaryComponent } from '../dialog-box-summary/dialog-box-summary.component';

import {BoxService} from '../box-service/box.service';
import {Box} from '../box';
import {UserServiceService} from '../user-service/user-service.service';
import {User} from '../user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-working-activity-home',
  templateUrl: './working-activity-home.component.html',
  styleUrls: ['./working-activity-home.component.css']
})
export class WorkingActivityHomeComponent implements OnInit {

  box: Box = new Box();
  userLogged: Observable<User[]>;

  constructor(private boxService: BoxService, private router: Router, public dialog: MatDialog, private userService: UserServiceService) { }

  ngOnInit(): void {
    for (let index = 0; index < 1; index++) {
      this.getUserLogged();
    }
  }

  getUserLogged(){
    this.userLogged = this.userService.getUserLogged();
    console.log("SONO L'UTENTE LOGGATO");
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


  addBox(){
    this.boxService.newBox(this.box).subscribe(data =>
        {
          console.log(data),
          this.openSummary(data)},
        error => console.log(error));
    this.box = new Box();
  }

  openSummary(result: any){
    const dialogRef = this.dialog.open(DialogBoxSummaryComponent, {
      data: {
        id: result.id,
        type: result.type,
        weight: result.weight,
        description: result.description,
        owner: result.owner,
        mail: result.mail,
        tel: result.tel
      }
    });
  }

}
