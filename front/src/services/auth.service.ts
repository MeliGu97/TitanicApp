import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3002/api'; // Assurez-vous de corriger l'URL
  private isAuthenticated: boolean = false;  // Assurez-vous de mettre à jour ceci en fonction de votre logique d'authentification
  private instanceId: number;
  constructor(private http: HttpClient) {this.instanceId = Math.floor(Math.random() * 1000000);    console.log(`AuthService instance created with id: ${this.instanceId}`);}

  login(credentials: { email: string, password: string }): Observable<any> {
    try{
      const rep = this.http.post(`${this.apiUrl}/login`, credentials);
      if(rep) this.isAuthenticated = true
      return rep
    }
    finally {
      console.log("connexion échouée")
    }
  }

  setAuthenticated(value: boolean): void {
    this.isAuthenticated = value;
  }

  logout(): void {
    // Logique de déconnexion, mettez à jour isAuthenticated en conséquence
    // ...
    this.isAuthenticated = false; // Exemple: marquer l'utilisateur comme non authentifié
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
