import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Auth: boolean = false;

  auth(email: string, mdp: string): boolean {
    this.Auth = true;
    return this.Auth;
  }
  logout(): void {
    this.Auth = false;
  }
  
  isAuth(): boolean {
    return this.Auth;
  }
  constructor() { }
}
