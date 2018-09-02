import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../model/todo';

@Component(
  {
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
  }
)
export class TodoListComponent {

  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
