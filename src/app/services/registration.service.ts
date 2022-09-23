import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MadrasaRegistration } from '../madrasaClass/madrasa-registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  deleteMadrasa() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8080/registration';

  public registerStudent(data: any) {
    return this.http.post(this.API , data); 
  }

  // public getMadrasaById(id: any){
  //   return this.http.get<any>(`${this.API}/${ id}`)
  // }

  public getAllMadrasat(): Observable<MadrasaRegistration[]>{
    return this.http.get<MadrasaRegistration[]>(`${this.API}`);
  }

  public createAdminMadrasat(madrasaRegistration: MadrasaRegistration): Observable<Object>{
    return this.http.post(`${this.API}`, madrasaRegistration);
  }

  public getMardasaById(id: number): Observable<MadrasaRegistration>{
    return this.http.get<MadrasaRegistration>(`${this.API}/${id}`);
  }

  public updateAminMadrasat(id: number, madrasaRegistration: MadrasaRegistration): Observable<Object>{
    return this.http.put(`${this.API}/${id}`, madrasaRegistration);
  }

  public deleteMadrasat(id: number): Observable<Object>{
    return this.http.delete(`${this.API}/${id}`);
  }
}
