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
  @Input() completed: boolean;
  @Input() date: string;

  toggle(): void {
    if (!this.completed) {
      showQuote();
    }
    this.completed = !this.completed;
  }

  showDetails(): void {
    alert('details');
  }
}