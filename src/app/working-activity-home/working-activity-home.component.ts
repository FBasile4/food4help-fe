import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-working-activity-home',
  templateUrl: './working-activity-home.component.html',
  styleUrls: ['./working-activity-home.component.css']
})
export class WorkingActivityHomeComponent implements OnInit {

  user: User;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backHome(){
    this.router.navigate(['home']);
  }
  reservations(){

  }

  box(){
    
  }

}
