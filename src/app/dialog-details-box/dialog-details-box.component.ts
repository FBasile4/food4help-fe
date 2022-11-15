import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Box} from '../box';
import {BoxService} from '../box-service/box.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Reservation} from '../reservation';
import {ReservationService} from '../reservation-service/reservation.service';

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

  reservation: Reservation = new Reservation();

  constructor( public dialogRef: MatDialogRef<DialogDetailsBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: Box, private boxService: BoxService, private _snackBar: MatSnackBar, private reservationService: ReservationService) {
    this.id = data.id;
    this.type = data.type;
    this.weight = data.weight;
    this.description = data.description;
    this.owner= data.owner;
  }

  ngOnInit(): void {
  }

  reservationBox(){
    let res: any;
    res = this.reservation;
    this.reservationService.newReservation(this.reservation)
      .subscribe( booking =>
          {
            res = booking;
            res.idBox = this.id;
            res.workingact = this.owner;
            //res.charityact =
            booking = res;
            console.log(booking);
            this.openSnackBar();
            this.reservation=res;
            console.log(this.reservation);
          },
          error => console.log(error));
    this.reservation = new Reservation();
  }

  openSnackBar() {
    this._snackBar.open('La box è stata prenotata con successo. Se cambi idea elimina la tua prenotazione', 'X', {
      duration: 60000,
      verticalPosition: 'top',
    });
  }


}
