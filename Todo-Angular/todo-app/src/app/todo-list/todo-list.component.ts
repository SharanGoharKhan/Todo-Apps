import { Component, Input } from '@angular/core';
import { TodoService } from '../shared/todo-storage.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent  {

    @Input() todo: string;
    @Input() index: number;

    constructor(private todoService: TodoService) { }

    onDeleteTodo() {
        this
        .todoService
        .changeTodo(this.index);
    }
}
