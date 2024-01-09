import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'titanic-app';
  Passager: any = [];
  User: any = [];
  Users!: any[];

  ngOnInit() {
    // Récupérer les données depuis la base de données
    this.User.find().then((data: any) => {
      this.Users = data;
    });
  }
}
