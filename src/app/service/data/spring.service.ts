import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Welcome{
  constructor(public message:string, public localDateTime:string){}
}

@Injectable({
  providedIn: 'root'
})



export class SpringService {

  constructor(private http:HttpClient) { }
  svcApi1(): Observable<Welcome>{
    return this.http.get<Welcome>('http://localhost:8080/v1/hello');
  } 
  svcApi2(name: string): Observable<Welcome>{
    return this.http.get<Welcome>(`http://localhost:8080/v1/hello/${name}`);
  }
  getUsers(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/v1/users');
  }
  createUser(user: any): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/v1/users', user);
  }
}
