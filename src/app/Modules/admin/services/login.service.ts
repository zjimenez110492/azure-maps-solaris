import { Usuario } from './../models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogged:boolean;
  constructor(private http: HttpClient) {
    this.isLogged=false;
   }
  onLogin(u:Usuario): Observable<any>
    {
      return this.http.post(environment.url_back_end +'/usuario',u);
    }
    getCentro(): Observable<any>
    {
      return this.http.get(environment.url_back_end +'/centro');
    }
    cerrarSesion(){
      this.isLogged=false;
      localStorage.setItem('token','');
    }
    is_Logged(){
      return this.isLogged;
    }
}
