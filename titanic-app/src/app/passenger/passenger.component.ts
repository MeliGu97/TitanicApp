import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../passenger.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-passenger',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [PassengerService],
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss'],
})
export class PassengerComponent implements OnInit {
  Passager: any = [];
  // lesPassagers: any;

  constructor(private passengerService: PassengerService) {}

  // on recupere les passagers
  ngOnInit(): void {
    this.passengerService.getPassager().subscribe((data) => {
      this.Passager = data;
    });
  }
}