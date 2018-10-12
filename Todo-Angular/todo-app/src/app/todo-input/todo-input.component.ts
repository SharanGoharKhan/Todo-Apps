import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-todo-input',
    templateUrl: './todo-input.component.html',
    styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {

    // tslint:disable-next-line:no-output-on-prefix
    @Output() onTodoAdd: EventEmitter<any> = new EventEmitter<any>();
    todo: String = '' ;

    onSaveTodo() {
        this
        .onTodoAdd
        .emit(this.todo);
    }
}
