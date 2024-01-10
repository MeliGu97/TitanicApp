import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  // Utilisez des informations d'identification réelles pour tester l'authentification
  private expectedEmail: string = 'toto@test.fr';
  private expectedPassword: string = 'toto';

  auth(email: string, password: string): boolean {
    // Vérifiez si les informations d'identification sont correctes
    if (email === this.expectedEmail && password === this.expectedPassword) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }

    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuth(): boolean {
    return this.isAuthenticated;
  }
}
