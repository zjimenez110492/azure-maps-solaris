import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const httpOptions = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':localStorage.getItem('token')});
    /** In Angular 5, including the header Content-Type can invalidate your request */
@Injectable({
  providedIn: 'root'
})
export class CoordenadasService {

  constructor(private http: HttpClient) { }
  getCoordenadas(): Observable<any>
    {
      return this.http.get(environment.url_back_end +'/coordenadas',{ headers: httpOptions });
    }
    getCentro(): Observable<any>
    {
      console.log("HEADERS A ENVIAR:  ",httpOptions);
      return this.http.get(environment.url_back_end +'/centro',{ headers: httpOptions });
    }
}
