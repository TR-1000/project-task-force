import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todos';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[]; // to-dos list
  todo:Todo;

  // initialize services
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos)=> { // subscribe to observable is like .then()
      this.todos = todos;
    });
  }



  // Set Dynamic Classes
  setClasses(todo:Todo) {
    let classes = {
      // .todo class
      todo: true,
      // .is-complete class
      'is-complete':todo.completed
    }
    return classes
  }

  onToggle(todo:Todo) {
    console.log(todo);
    todo.completed = !todo.completed
    console.log(todo);

    this.todoService.toggleCompleted(todo).subscribe((todo) => {
      console.log(todo) }
    )

  }

  onDelete(todo:Todo) {
    console.log('delete from todo-item component');
    this.deleteTodo(todo);
    //this.todoService.deleteTodo(todo).subscribe();
  }


  deleteTodo(todo:Todo) {
    console.log('deleting from todos component');
    this.todos = this.todos.filter(t => t.id !== todo.id)
  }

  addTodo(todo:Todo) {
    console.log('adding todo');
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
      console.log(this.todos);

    });
  }




}
