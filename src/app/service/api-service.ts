import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import {  User } from '../models/user.model';
import { Admin } from '../models/admin.model';
import { TDL } from '../models/to-do-list';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  // Method to fetch data
  getData(): Observable<any> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
  
   // Method to add a new user
 adduser(data: FormData): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/users`, data);
}


  // Method to update 
  updateUser(id: number, user: User): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  getUserById(id: any) {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
  
  //delete user
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Method to fetch ADMIN data
  getAdmin(): Observable<any> { 
    return this.http.get<Admin[]>(`${this.apiUrl}/admin`);
  }
  
  // Method to add a new admin
  addAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.apiUrl}/admin`, admin);
  }

  //  Method to update for Amin
  updateAdmin(id: number, admin: Admin): Observable<any> {
    return this.http.put(`${this.apiUrl}/admin/${id}`,admin);
  }

  /// Method for Delect
  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/${id}`);
  }

  // -------------To-DO-LIST-----------

  // Method to fetch ADMIN data
  gettdlist(): Observable<any>{
    return this.http.get<TDL[]>(`${this.apiUrl}/todolist`);
  }

  // Method to add a new admin
  addtdlist(task: TDL): Observable<TDL> {
    return this.http.post<TDL>(`${this.apiUrl}/todolist`, task);
  }
  
  // Method to Delete TO-Do-List
  
  deletelist(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/todolist/${id}`);
  }
  
// ROLE - PERMISSION
  addrole(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/insertrole`, data);
  }

  // rxjs practice
  getJsonUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map((userList: any) =>
        userList.map((user: any) => {
          return {
            id: user.id,
            name: user.name
          };
        })
      )
    );
  }

  // subject behavior practice

  courseDution = new BehaviorSubject<string>('Behavior Subject services');


}














