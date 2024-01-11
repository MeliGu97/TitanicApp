import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { PassengerComponent } from "../passenger/passenger.component";
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'titanic-page-membre',
    standalone: true,
    templateUrl: './page-membre.component.html',
    styleUrl: './page-membre.component.scss',
    imports: [CommonModule, RouterOutlet, PassengerComponent],
})
export class PageMembreComponent {
    constructor(public authService: AuthService) {}
}
