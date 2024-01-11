import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'titanic-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
  }

  onSubmit() {
    // ici on peut envoyer les données du formulaire au backend
    const formData = this.loginForm.value;
    // Envoyer formData à votre service d'authentification
    this.authService.login(formData).subscribe(
      response => {
        console.log('Connexion réussie', response);
        // Gérez la réponse ici
      },
      error => {
        console.error('Erreur de connexion', error);
        // Gérez les erreurs ici
      }
    );
  }
}
