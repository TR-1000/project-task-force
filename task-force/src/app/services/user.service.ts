import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl:string = 'https://my-json-server.typicode.com/tr-1000/demo/users/'

  constructor(private http:HttpClient) { }

  createUser(user:User):Observable<User> {
    console.log('user created');
    return this.http.post<User>(this.usersUrl, user, httpOptions);
  }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(id:number):Observable<User> {
    return this.http.get<User>(`${this.usersUrl}${id}`)
  }

  updateUser(user:User):Observable<any> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.put(url, user, httpOptions);
  }

  deleteUser(user:User):Observable<User> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.delete<User>(url, httpOptions)
  }
}
