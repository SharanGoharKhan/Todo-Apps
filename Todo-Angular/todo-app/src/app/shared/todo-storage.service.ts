import { Subject } from 'rxjs';

export class TodoService {

    private todoSubjectIndex = new Subject<number>();
    public todoObserverIndex = this.todoSubjectIndex.asObservable();

    changeTodo(todoIndex: number) {
        this.todoSubjectIndex.next(todoIndex);
    }
}
