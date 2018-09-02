import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../model/todo';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent {

  newTodo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor(private auth: AuthService,
    private router: Router) {
  }

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

  public doSignOut() {
    this.auth.doSignOut();
    this.router.navigate(['/sign-in']);
  }

}
