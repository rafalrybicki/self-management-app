import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/shared/models';
import { getFormattedDate } from 'src/app/shared/utils';
import { addTask } from 'src/app/store/tasks.actions';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  @Input() date: Date;
  showEditor: boolean = true; 

  taskForm = new FormGroup({
    content: new FormControl('', [Validators.required]),
    date: new FormControl(new Date()),
    weight: new FormControl(1),
    subtasks: new FormControl(0),
  });

  constructor(private store: Store<State>) {}

  toggleEditor(): void {
    this.showEditor = !this.showEditor;
  }

  onSubmit(): void {
    const subtasks = this.taskForm.value.subtasks || 0;
    let weight = this.taskForm.value.weight || 1;

    if (weight > 0 && subtasks > 0) {
      weight *= subtasks;
    }

    this.store.dispatch(addTask({ 
      id: 'ID_' + Math.random(),
      content: this.taskForm.value.content!,
      date: getFormattedDate(this.date),
      weight,
      completion: 0,
      order: 1,
      totalSubtasks: subtasks,
      completedSubtasks: 0
    }))

    this.taskForm.patchValue({
      content: '',
      weight: 1,
      subtasks: 0
    });
  }
}