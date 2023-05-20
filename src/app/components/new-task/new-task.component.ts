import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, Task } from 'src/app/shared/models';
import { getFormattedDate } from 'src/app/shared/utils';
import { addTask } from 'src/app/store/tasks.actions';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  @Input() date: Date;
  showEditor: boolean = false; 

  constructor(private store: Store<State>) {}

  toggleEditor(): void {
    this.showEditor = !this.showEditor;
  }

  onSave(values: Partial<Task>): void {
    this.store.dispatch(addTask({ 
      id: 'ID_' + Math.random(),
      date: getFormattedDate(this.date),
      completion: 0,
      order: 1,
      completedSubtasks: 0,
      content: values.content!,
      weight: values.weight!,
      subtasks: values.subtasks!
    }))
  }
}