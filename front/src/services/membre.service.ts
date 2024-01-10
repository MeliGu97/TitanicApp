// peut etre inutile ça ..
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  constructor(private http: HttpClient) {}

  getPageMembre() {
    return this.http.get('/page-membre');
  }
}
