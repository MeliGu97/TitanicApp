import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'titanic-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    // Pour authentifier l'utilisateur
    const isAuthenticated = this.authService.auth(this.email, this.password);

    if (isAuthenticated) {
      this.router.navigate(['/page-membre']);
      console.log("hola la compagnie tu peux venir") 
    } else {
      this.errorMessage = 'L\'authentification a échoué. Veuillez vérifier vos informations de connexion.';
    }
  }
}
