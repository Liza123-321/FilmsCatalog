import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/models/user';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { loginUrl, registerUrl } from './consts'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post(loginUrl, user, httpOptions)
      .pipe(
        tap(data => {
          sessionStorage.setItem('jwt_token', data.access_token);
          sessionStorage.setItem('email', data.email);
        })
      );
  }

  register(user: User): Observable<any> {
    return this.http.post(registerUrl, user, httpOptions)
    .pipe(
      tap(data => {      
        // sessionStorage.setItem('jwt_token', data.access_token);
      })
    );
  }



}
