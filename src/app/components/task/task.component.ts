import { Component, Input } from '@angular/core';
import { showQuote } from '../../shared/utils';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() id: number;
  @Input() content: string;
  @Input() date: string;
  @Input() weight: number = 100;
  @Input() completion: number = 0;
  @Input() totalSubtasks: number = 0;
  @Input() completedSubtasks: number = 0;

  toggle(): void {
    if (!this.completed) {
      if (this.totalSubtasks === 0) {
        this.completion = this.weight;
      } else {
        this.completedSubtasks += 1;
        this.completion = (this.completedSubtasks / this.totalSubtasks) * this.weight;
      }
      showQuote();
    } else {
      this.completedSubtasks = 0;
      this.completion = 0;
    }
  }

  showDetails(): void {
    alert('details');
  }

  get completed(): boolean {
    return this.completion === this.weight;
  }
}