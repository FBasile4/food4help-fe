import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatListModule} from '@angular/material/list';


import { AppComponent } from './app.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { WorkingActivityHomeComponent } from './working-activity-home/working-activity-home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DialogBoxSummaryComponent } from './dialog-box-summary/dialog-box-summary.component';
import { BoxPublishedComponent } from './box-published/box-published.component';
import { CharityComponent } from './charity-home/charity.component';
import { DialogDetailsBoxComponent } from './dialog-details-box/dialog-details-box.component';
import { ReservationBoxCharityComponent } from './reservation-box-charity/reservation-box-charity.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent,
    LoginUserComponent,
    HomeComponent,
    WorkingActivityHomeComponent,
    CreateUserComponent,
    DialogBoxSummaryComponent,
    BoxPublishedComponent,
    CharityComponent,
    DialogDetailsBoxComponent,
    ReservationBoxCharityComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatRadioModule,
    MatSnackBarModule,
    ScrollingModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
