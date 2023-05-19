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
  @Input() totalSubtasks: number | undefined;
  @Input() completedSubtasks: number | undefined;

  constructor(private store: Store<State>) {}

  toggle(): void {
    if (!this.completed) {
      if (!this.totalSubtasks) {
        this.updateTask({ completion: this.weight });
      } else {
        this.updateTask({ 
          completedSubtasks: this.completedSubtasks! += 1,
          completion: (this.completedSubtasks! / this.totalSubtasks!) * this.weight
        });
      }
      showQuote();
    } else {
      this.updateTask({ completion: 0, completedSubtasks: 0 });
    }
  }

  updateTask(values: Partial<Task>): void {
    this.store.dispatch(updateTask({ taskId: this.id, values }))
  }

  deleteTask(): void {
    this.store.dispatch(deleteTask({ taskId: this.id }))
  }

  showDetails(): void {
    alert('details');
  }

  get completed(): boolean {
    return this.completion === this.weight;
  }
}