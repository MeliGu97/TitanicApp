import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {

  constructor(private http: HttpClient) {}

  getPassagers() {
    // ng serve --proxy-config proxy.conf.json ne fonctionne pas donc j'ai écrit en dur
    return this.http.get('http://localhost:3002/api/passengers');
  }
}
