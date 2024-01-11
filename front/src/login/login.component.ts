import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'titanic-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
  }

  onSubmit() {
    // À ce stade, vous pouvez envoyer les données du formulaire au backend
    const formData = this.loginForm.value;
    // Envoyer formData à votre service d'authentification
    this.authService.login(formData).subscribe(
      response => {
        console.log('Connexion réussie', response);
        // Gérez la réponse ici, par exemple, stockez un jeton d'authentification
      },
      error => {
        console.error('Erreur de connexion', error);
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
      }
    );
  }
}
