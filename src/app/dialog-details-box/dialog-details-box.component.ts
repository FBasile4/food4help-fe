import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Box} from '../box';
import {BoxService} from '../box-service/box.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-details-box',
  templateUrl: './dialog-details-box.component.html',
  styleUrls: ['./dialog-details-box.component.css']
})
export class DialogDetailsBoxComponent implements OnInit {
  id: number;
  type: string;
  weight: number;
  description: string;
  owner: string

  constructor( public dialogRef: MatDialogRef<DialogDetailsBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: Box, private boxService: BoxService, private _snackBar: MatSnackBar) {
    this.id = data.id;
    this.type = data.type;
    this.weight = data.weight;
    this.description = data.description;
    this.owner= data.owner;
  }

  ngOnInit(): void {
  }

  openSnackBar() {
    this._snackBar.open('La box è stata prenotata con successo. Se cambi idea elimina la tua prenotazione', 'X', {
      duration: 60000,
      verticalPosition: 'top',
    });
  }

}
