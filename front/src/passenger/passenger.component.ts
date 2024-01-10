import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../services/passenger.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'titanic-passenger',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [PassengerService],
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss'],
})
export class PassengerComponent implements OnInit {
  passagers: any = [];

  constructor(public authService: AuthService, private passengerService: PassengerService) {}

  // on recupere les passagers
  ngOnInit(): void {
    this.passengerService.getPassagers().subscribe((data) => {
      console.log("datadatadatadatadata", data)
      this.passagers = data;
    });
  }
}