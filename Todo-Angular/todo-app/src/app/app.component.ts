import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos: any = [];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.
    todoObserverIndex.
    subscribe(todo_index => {
    this.todos.splice(todo_index, 1);
    });
  }
  handleTodoAdd(todo: String): void {
    this.todos.push(todo);
  }

}
