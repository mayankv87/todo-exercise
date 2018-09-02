import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListHeaderComponent } from './components/todo-list-header/todo-list-header.component';
import { TodoDataService } from './services/todo-data/todo-data.service';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { ApiService } from './services/api/api.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { TodosComponent } from './components/todos/todos.component';
import { AuthService } from './services/auth/auth.service';
import { SessionService } from './services/session/session.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListHeaderComponent,
    TodoListItemComponent,
    SignInComponent,
    TodosComponent,
    TodoListItemComponent,
    PageNotFoundComponent,
    TodosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    AuthService,
    SessionService,
    TodoDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
