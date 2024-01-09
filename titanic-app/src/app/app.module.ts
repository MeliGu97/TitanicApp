import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';

// import { HomeComponent } from './home/home.component';
import { AppRoutingModule, routes } from './app-routing.module';
import { PassengerService } from './passenger.service';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    // HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // RouterModule.forRoot(routes),

    // FormsModule,
    CommonModule,
  ],
  providers: [PassengerService, UserService],
})
export class AppModule { }
