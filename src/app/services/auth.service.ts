import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUserDTO } from '../DTOs/Entity/RegisterUserDTO';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDTO } from '../DTOs/Entity/UserDTO';
import { HomeUserResponse } from '../DTOs/HomeUserResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(
    private http: HttpClient
  ) {
  }
 
  registerUser(registerData: RegisterUserDTO): Observable<any> {
    return this.http.post<any>('/users/register', registerData);
  }
}
