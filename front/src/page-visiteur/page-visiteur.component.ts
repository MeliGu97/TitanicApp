import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../services/passenger.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { PassengerComponent } from "../passenger/passenger.component";

@Component({
  selector: 'titanic-page-visiteur',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, PassengerComponent],
  providers: [PassengerService],
  templateUrl: './page-visiteur.component.html',
  styleUrl: './page-visiteur.component.scss'
})
export class PageVisiteurComponent implements OnInit {
  passagers: any = [];

  constructor(private passengerService: PassengerService) {}

  // on recupere les passagers
  ngOnInit(): void {
    this.passengerService.getPassagers().subscribe((data) => {
      console.log("datadatadatadatadata", data)
      this.passagers = data;
    });
  }

}
