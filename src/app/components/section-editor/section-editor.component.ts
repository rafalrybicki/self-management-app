import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-section-editor',
  templateUrl: './section-editor.component.html',
  styleUrls: ['./section-editor.component.scss']
})
export class SectionEditorComponent {
  @Input() name: string = '';
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<string>();

  sectionForm = new FormGroup({
    name: new FormControl(this.name, [Validators.required]),
  });

  ngOnInit(): void {
    this.sectionForm.patchValue({
      name: this.name
    });
  }

  onClose(): void {
    this.close.emit();
  }

  onSubmit(): void {
    this.save.emit(this.sectionForm.value.name!);

    this.sectionForm.patchValue({
      name: ''
    });
  }
}
