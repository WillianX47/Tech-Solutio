import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../Model/UserLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  cadastrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(
      'http://localhost:8080/usuario/cadastrar', userLogin
    )
  }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(
      'http://localhost:8080/usuario/logar', userLogin
    );
  }
}
