import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Authservice {
  baseUrl = 'http://localhost:3000/api';
  // loginUrl = 'http://localhost:3000/api/login';
  constructor(private http: HttpClient) { }

    
  // Method to register a new user
  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  };

  login(data: any) : Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
  }

