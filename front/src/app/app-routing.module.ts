import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { PageMembreComponent } from '../page-membre/page-membre.component';
import { PageVisiteurComponent } from '../page-visiteur/page-visiteur.component'
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from '../auth/auth.guard';
import { PassengerComponent } from '../passenger/passenger.component';
import { homeComponent } from '../home/homre.component';

export const routes : Routes = [
  {
    path: '',
    component: homeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'page-visiteur',
    component: PageVisiteurComponent
  },
  {
    path: 'page-membre', 
    //canActivate: [AuthGuardService],
    component: PageMembreComponent
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
