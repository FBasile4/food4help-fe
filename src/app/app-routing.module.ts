import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './login-user/login-user.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { WorkingActivityHomeComponent } from './working-activity-home/working-activity-home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import {BoxPublishedComponent} from './box-published/box-published.component';
import {CharityComponent} from './charity-home/charity.component';
import {ReservationBoxCharityComponent} from './reservation-box-charity/reservation-box-charity.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/login', component: LoginUserComponent },
  { path: 'home/searchUsers', component: SearchUsersComponent },
  { path: 'home/workingActivity/create', component: CreateUserComponent },
  { path: 'home/charity/create', component: CreateUserComponent },
  { path: 'home/workingActivity', component: WorkingActivityHomeComponent },
  { path: 'home/charity', component: CharityComponent },
  { path: 'home/workingActivity/boxAvailable', component:  BoxPublishedComponent },
  { path: 'home/charity/booking', component:  ReservationBoxCharityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
