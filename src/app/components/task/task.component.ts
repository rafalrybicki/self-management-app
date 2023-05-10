import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() id: number;
  @Input() content: string;
  @Input() completion: boolean;
  @Input() date: string;

  toggle(): void {
    this.completion = !this.completion;
  }

  showDetails(): void {
    alert('details');
  }
}