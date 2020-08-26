import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/todos';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @Output() deleteTodo:EventEmitter<Todo> = new EventEmitter();
  statusOptions:boolean[] = [false, true];
  radioSelected:boolean;

  constructor(
    private todoService:TodoService,
    private route:ActivatedRoute,
    private location:Location
  ) { }


  // Set Dynamic Classes
  setClasses() {
    let classes = {
      // .todo class
      todo: true,
      // .is-complete class
      'is-complete':this.todo.completed
    }
    return classes
  }

  onToggle(todo:Todo) {
    console.log('toggle');
    todo.completed = !todo.completed
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo))

  }

  save(): void {
  this.todoService.updateTodo(this.todo)
    .subscribe(() => this.goBack());
}



  ngOnInit(): void {
    this.getTodo();
  }


  getTodo():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodo(id).subscribe(todo => this.todo = todo);
  }

  goBack(): void {
    this.location.back();
  }


}
