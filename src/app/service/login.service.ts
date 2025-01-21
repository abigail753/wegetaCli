import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<string> {
    const loginData = { email, password };
    return this.http.post<string>('http://localhost:8086/auth/login', loginData);
  }
}