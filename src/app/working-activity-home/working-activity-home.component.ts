import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogBoxSummaryComponent } from '../dialog-box-summary/dialog-box-summary.component';
import { User } from '../user';

@Component({
  selector: 'app-working-activity-home',
  templateUrl: './working-activity-home.component.html',
  styleUrls: ['./working-activity-home.component.css']
})
export class WorkingActivityHomeComponent implements OnInit {
  

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {  }

  backHome(){
    this.router.navigate(['home']);
  }
  reservations(){

  }

  box(){

  }

  stayHome(){
    this.router.navigate(['home/workingActivity']);
  }
  openSummary(){
    this.dialog.open(DialogBoxSummaryComponent);
  }

}
