import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todos';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl:string = 'http://18.216.97.30:8080/todos'
  //todosUrl:string ='https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=15';

  constructor(private http:HttpClient) { }

  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions)
  }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}`);
  }

  getTodo(id:number):Observable<Todo> {
    return this.http.get<Todo>(`${this.todosUrl}/${id}`)
  }

  updateTodo(todo:Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.patch(url, todo, httpOptions);
  }

  toggleCompleted(todo:Todo):Observable<any> {
    console.log(todo);
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.patch(url, todo, httpOptions);
  }

  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions)
  }






}
