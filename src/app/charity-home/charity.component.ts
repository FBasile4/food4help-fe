import {Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Box} from '../box';
import {BoxService} from '../box-service/box.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogDetailsBoxComponent} from '../dialog-details-box/dialog-details-box.component';
import {User} from '../user';
import {UserServiceService} from '../user-service/user-service.service';

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css']
})
export class CharityComponent implements OnInit {

  boxes: Observable<Box[]>;

  constructor( private router: Router, private boxService: BoxService,  public dialog: MatDialog, private userService: UserServiceService) { }

  ngOnInit(): void {
    for (let index = 0; index < 10000; index++) {
      this.getBoxAvailable();
    }

  }


  //--------------NAVIGATE-----------
  backHome(){
    this.userService.deleteUser().subscribe(data => console.log(data));
    this.router.navigate(['home']);
  }
  reservations(){
    this.router.navigate(['home/charity/booking']);
  }

  stayHome(){
    this.router.navigate(['home/charity']);
  }
  //--------------------

  getBoxAvailable(){
    this.boxes = this.boxService.getBoxList();
  }

  detailsBox(box: Box){
    const dialogRef = this.dialog.open(DialogDetailsBoxComponent, {
      width: '400px',
      data: {
        id: box.id,
        type: box.type,
        weight: box.weight,
        description: box.description,
        owner: box.owner
      }
    });
  }

}
