import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, Task } from 'src/app/shared/models';
import { getFormattedDate } from 'src/app/shared/utils';
import { addTask } from 'src/app/store/tasks.actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  @Input() mode: 'day' | 'section';
  @Input() date: Date;
  @Input() projectId: string;
  @Input() sectionId: string;
  
  showEditor: boolean = false; 

  constructor(private store: Store<State>) {}

  toggleEditor(): void {
    this.showEditor = !this.showEditor;
  }

  onSave(values: Partial<Task>): void {
    this.store.dispatch(addTask({ 
      id: uuid(),
      projectId: this.projectId,
      sectionId: this.sectionId,
      date: this.date?.valueOf(),
      dateStr: this.date && getFormattedDate(this.date),
      completion: 0,
      order: 0,
      completedSubtasks: 0,
      content: values.content!,
      weight: values.weight!,
      subtasks: values.subtasks!
    }))
  }
}