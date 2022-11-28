import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Reservation} from '../reservation';
import {Router} from '@angular/router';
import {ReservationService} from '../reservation-service/reservation.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {CharityComponent} from '../charity-home/charity.component';
import {UserServiceService} from '../user-service/user-service.service';

@Component({
  selector: 'app-reservation-box-charity',
  templateUrl: './reservation-box-charity.component.html',
  styleUrls: ['./reservation-box-charity.component.css']
})
export class ReservationBoxCharityComponent implements OnInit {

  reservations: Observable<Reservation[]>;

  constructor( private router: Router, private reservationService: ReservationService, private userService: UserServiceService) { }

  ngOnInit(): void {
    for (let index = 0; index < 10000; index++) {
      this.getReservation();
    }
  }

  //--------------NAVIGATE-----------
  backHome(){
    this.userService.deleteUser().subscribe(data => console.log(data));
    this.router.navigate(['home']);
  }
  booking(){
    this.router.navigate(['home/charity/booking']);
  }

  stayHome(){
    this.router.navigate(['home/charity']);
  }
  //--------------------

  getReservation(){
    this.reservations = this.reservationService.getReservations();
  }

  deleteReservation(id: number){
      this.reservationService.deleteReservation(id).subscribe(
        data => {
          console.log(data);
          this.getReservation();
        },
        error => console.log(error));
  }
}
