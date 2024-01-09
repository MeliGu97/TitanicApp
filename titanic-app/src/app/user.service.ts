import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) {}

  // Essaie pour récupere les données
  getUser() {
    return this.http.get('/api/Users');
  }
}
