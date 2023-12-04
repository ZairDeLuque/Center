import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public pacientes(): Observable<any> {
    return this.http.get<any>(`${env.apiUrl}/api/v1/inside/pacientes`);
  }

  public procedimientos(): Observable<any> {
    return this.http.get<any>(`${env.apiUrl}/api/v1/inside/procedimientos`);
  }

  public equipo(): Observable<any> {
    return this.http.get<any>(`${env.apiUrl}/api/v1/inside/equipo`);
  }
  
  public editarpacientes(data: any): Observable<any> {
    return this.http.post<any>(`${env.apiUrl}/api/v1/inside/editar/pacientes`, data);
  }

  public eliminarpacientes(data: any): Observable<any> {
    return this.http.post<any>(`${env.apiUrl}/api/v1/inside/eliminar/pacientes`, data);
  }

  public personal(): Observable<any> {
    return this.http.get<any>(`${env.apiUrl}/api/v1/inside/personal`);
  }

  public donativos(): Observable<any> {
    return this.http.get<any>(`${env.apiUrl}/api/v1/inside/donativos`);
  }

  public presupuestos(): Observable<any> {
    return this.http.get<any>(`${env.apiUrl}/api/v1/inside/presupuestos`);
  }
}
