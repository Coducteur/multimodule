import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('./assets/json/users.json');
  }

  // getUserById(id: number): Observable<User | undefined> {
  // return this.http.get('./assets/json/users.json')
  //}

  getUserById(id: number): Observable<User | undefined> {
    return this.http
      .get<User[]>('./assets/json/users.json')
      .pipe(map((users) => users.find((user) => user.id === id)));
  }
}
