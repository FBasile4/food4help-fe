import {Component, Inject, OnInit} from '@angular/core';
import {Box} from '../box';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box-summary',
  templateUrl: './dialog-box-summary.component.html',
  styleUrls: ['./dialog-box-summary.component.css']
})
export class DialogBoxSummaryComponent implements OnInit {

  type: string;
  weight: number;
  description: string;
  owner: string

  constructor( public dialogRef: MatDialogRef<DialogBoxSummaryComponent>, @Inject(MAT_DIALOG_DATA) public data: Box) {
    this.type = data.type;
    this.weight = data.weight;
    this.description = data.description;
    this.owner= data.owner;
  }

  ngOnInit(): void {
  }

}
