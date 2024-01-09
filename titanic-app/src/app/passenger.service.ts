import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {

  constructor(private http: HttpClient) {}

  // getPassengers(): Observable<Passenger[]> {
  //   return this.http.get<Passenger[]>(this.apiUrl);
  // }
  
  // Essaie pour récupere les données
  getPassager() {
    return this.http.get('/api/lesPassagers');
  }
}
