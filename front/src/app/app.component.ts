import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { PassengerComponent } from '../passenger/passenger.component';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from '../login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PassengerComponent, LoginComponent, HttpClientModule],
  providers: [AuthService, HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front';
  // doit être le seul à créer une instance du service auth garder en mémoire la co
  constructor(public authService: AuthService, public router: Router) {}
  
}
