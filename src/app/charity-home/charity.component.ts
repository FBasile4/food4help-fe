import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Box} from '../box';
import {BoxService} from '../box-service/box.service';
import {DialogBoxSummaryComponent} from '../dialog-box-summary/dialog-box-summary.component';
import {MatDialog} from '@angular/material/dialog';
import {DialogDetailsBoxComponent} from '../dialog-details-box/dialog-details-box.component';

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css']
})
export class CharityComponent implements OnInit {

  boxes: Observable<Box[]>;

  constructor( private router: Router, private boxService: BoxService,  public dialog: MatDialog) { }

  ngOnInit(): void {
    for (let index = 0; index < 10000; index++) {
      this.getBoxAvailable();
    }
  }

  //--------------NAVIGATE-----------
  backHome(){
    this.router.navigate(['home']);
  }
  reservations(){

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
