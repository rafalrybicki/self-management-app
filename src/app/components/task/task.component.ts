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
  @Input() id: string;
  @Input() content: string;
  @Input() date: string;
  @Input() weight: number;
  @Input() completion: number;
  @Input() order: number;
  @Input() subtasks: number;
  @Input() completedSubtasks: number;

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

  onEdit(values: Partial<Task>): void {
    this.updateTask(values);
    this.toggleEditor;
  }

  showDetails(): void {
    alert('details');
  }

  get completed(): boolean {
    return this.completion === this.weight;
  }
}