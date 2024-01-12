import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { PassengerComponent } from "../passenger/passenger.component";
import { AuthService } from '../services/auth.service';
import { PassengerService } from '../services/passenger.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'titanic-page-membre',
    standalone: true,
    templateUrl: './page-membre.component.html',
    styleUrl: './page-membre.component.scss',
    imports: [CommonModule, HttpClientModule, RouterOutlet, PassengerComponent],
    providers: [PassengerService],
})
export class PageMembreComponent implements OnInit {
    passagers: any = [];

    constructor(public authService: AuthService, private passengerService: PassengerService, public router: Router) {}
    // on recupere les passagers
    ngOnInit(): void {
    this.passengerService.getPassagers().subscribe((data) => {
      console.log("datadatadatadatadata", data)
      this.passagers = data;
    });
  }

  onClickMortOuVif(status:number){
    this.passengerService.getPassagerStatus(status).subscribe((data) => {
      console.log("1ou0", data)
      this.passagers = data;
    });
  }

  onClickGenre(genre: string) {
    this.passengerService.getPassagerGenre(genre).subscribe((data) => {
      console.log("Genre filter", data);
      this.passagers = data;
    });
  }
  
}
