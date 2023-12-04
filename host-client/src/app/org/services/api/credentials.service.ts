import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  constructor(private http: HttpClient) { }

  public login(data: any): Observable<any> {
    return this.http.post<any>(`${env.apiUrl}/api/v1/login`, data);
  }
}
