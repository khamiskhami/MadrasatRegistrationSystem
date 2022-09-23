import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsercredenService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8080';

  public registerStudent(data: any) {
    return this.http.post(this.API + '/users', data); 
  }
}
