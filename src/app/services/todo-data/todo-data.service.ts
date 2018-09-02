import { Injectable } from '@angular/core';
import { Todo } from '../../model/todo';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class TodoDataService {

  constructor(
    private api: ApiService
  ) {
  }

  /**
   * POST /todos
   * @param todo
   */
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  /**
   * DELETE /todos/:id
   */
  deleteTodoById(todoId: number): Observable<Todo> {
    return this.api.deleteTodoById(todoId);
  }

  /**
   * GET /todos
   */
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos().delay(3000);
  }

  /**
   * GET /todos/:id
   * @param todoId
   */
  getTodoById(todoId: number): Observable<Todo> {
    return this.api.getTodoById(todoId);
  }
}
