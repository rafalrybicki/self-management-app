import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/shared/models';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss']
})
export class TaskEditorComponent implements OnInit {
  @Input() content: string = '';
  @Input() multiplier: number = 1;
  @Input() subtasks: number = 0;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Partial<Task>>();

  taskForm = new FormGroup({
    content: new FormControl(this.content, [Validators.required]),
    multiplier: new FormControl(this.multiplier, [Validators.required]),
    subtasks: new FormControl(this.subtasks, [Validators.required]),
  });

  ngOnInit(): void {
    this.taskForm.patchValue({
      content: this.content,
      multiplier: this.multiplier,
      subtasks: this.subtasks
    });
  }

  onClose(): void {
    this.close.emit();
  }

  onSubmit(): void {
    let subtasks = this.taskForm.value.subtasks!;
    let weight = this.taskForm.value.multiplier!;

    if (weight > 0 && subtasks > 0) {
      weight *= subtasks;
    }

    if (subtasks === 1) {
      subtasks = 0;
    }

    this.save.emit({
      content: this.taskForm.value.content!,
      weight,
      subtasks
    });

    this.taskForm.patchValue({
      content: '',
      multiplier: 1,
      subtasks: 0
    });
  }
}