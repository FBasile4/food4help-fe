import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Box} from '../box';

import {BoxService} from '../box-service/box.service';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-box-published',
  templateUrl: './box-published.component.html',
  styleUrls: ['./box-published.component.css']
})
export class BoxPublishedComponent implements OnInit {

  boxes: Observable<Box[]>;

  constructor( private router: Router, private boxService: BoxService) { }

  ngOnInit(): void {
    for (let index = 0; index < 10000; index++) {
      this.getBox();
    }
  }

  //--------------NAVIGATE-----------
  backHome(){
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

}
