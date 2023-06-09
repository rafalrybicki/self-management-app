import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, Task } from 'src/app/shared/models';
import { deleteTask, updateTask } from '../../store/tasks.actions';
import { showQuote } from 'src/app/shared/utils';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input({ required: true }) id: string;
  @Input({ required: true }) content: string;
  @Input({ required: true }) weight: number;
  @Input({ required: true }) completion: number;
  @Input({ required: true }) order: number;
  @Input({ required: true }) subtasks: number;
  @Input({ required: true }) completedSubtasks: number;
  @Input({ required: true }) mode: 'section' | 'day';
  @Input() date: number;
  @Input() dateStr: string;

  edit: boolean = false;

  constructor(private store: Store<State>) {}

  toggle(): void {
    if (!this.completed) {
      if (!this.subtasks) {
        this.updateTask({ completion: this.weight });
      } else {
        this.updateTask({ 
          completedSubtasks: this.completedSubtasks += 1,
          completion: (this.completedSubtasks / this.subtasks) * this.weight
        });
      }
      showQuote();
    } else {
      this.updateTask({ completion: 0, completedSubtasks: 0 });
    }
  }

  toggleEditor(): void {
    this.edit = !this.edit;
  }

  updateTask(values: Partial<Task>): void {
    this.store.dispatch(updateTask({ taskId: this.id, values }))
  }

  deleteTask(): void {
    if (window.confirm("Are you sure?")) {
      this.store.dispatch(deleteTask({ taskId: this.id }));
    }
  }

  onEdit(obj: Partial<Task>): void {
    if (obj.weight !== this.weight || obj.subtasks !== this.subtasks) {
      if (this.completed) {
        obj.completion = obj.weight;
        obj.completedSubtasks = obj.subtasks;
      } else {
        obj.completion = 0;
        obj.completedSubtasks = 0;
      }
    }

    this.updateTask(obj);
    this.toggleEditor;
  }

  showDetails(): void {
    alert('details');
  }

  get completed(): boolean {
    return this.completion === this.weight;
  }
}