import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { PassengerComponent } from './passenger/passenger.component';

export const routes : Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  { 
    path: 'lesPassagers', 
    component: PassengerComponent 
  },
];

@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule,
  //   RouterModule.forRoot(routes)
  // ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
