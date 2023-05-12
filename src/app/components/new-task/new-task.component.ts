import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  showEditor: boolean = false; 

  taskForm = new FormGroup({
    content: new FormControl('', [Validators.required]),
    date: new FormControl(new Date()),
  });

  toggleEditor(): void {
    this.showEditor = !this.showEditor;
  }

  onSubmit(): void {
    // this.task.form.value.content.trim()
    this.taskForm.patchValue({ content: '' });
  }
}