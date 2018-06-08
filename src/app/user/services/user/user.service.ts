import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = './../../../assets/users.json';
​
  constructor(private httpClient: HttpClient) {}
​
  getUsers(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }
}
