import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceKoboService {

  constructor(private http: HttpClient) { }

  getInformacionById(): Observable<any> {

    const opciones = {
      headers: new HttpHeaders({
        'Authorization': 'Token 5a70d9a7db0b528c4884b11a5ed21a1eab15409e'
      }),
    };

    return this.http.get('/assets/a63UcBSzCHUUqKneys69cR/submissions/?format=json',opciones);
  }
}
