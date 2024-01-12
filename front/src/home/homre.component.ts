import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'titanic-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class homeComponent implements OnInit {
  passagers: any = [];

  constructor() {}

  ngOnInit(): void {
  }
}