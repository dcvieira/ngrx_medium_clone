import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUserRequest } from '../types/registerUserRequest.interface';
import { CurrentUser } from 'src/app/shared/types/currentUser';
import { Observable, map } from 'rxjs';
import { AuthResponse } from '../types/authResponse';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../types/loginRequest';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getCurrentUser(): Observable<CurrentUser> {
    const url = environment.apiUrl + '/user';
    return this.http
      .get<AuthResponse>(url)
      .pipe(map((response) => response.user));
  }

  register(data: RegisterUserRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/users';
    return this.http
      .post<AuthResponse>(url, data)
      .pipe(map((response) => response.user));
  }

  login(data: LoginRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/users/login';
    return this.http
      .post<AuthResponse>(url, data)
      .pipe(map((response) => response.user));
  }
}
