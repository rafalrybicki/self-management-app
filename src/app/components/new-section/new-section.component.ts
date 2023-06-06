import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/shared/models';
import { addSection } from 'src/app/store/sections.actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-new-section',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.scss']
})
export class NewSectionComponent {
  @Input({ required: true }) projectId: string;
  @Input({ required: true }) order: number;

  showEditor: boolean = false; 

  constructor(private store: Store<State>) {}

  toggleEditor(): void {
    this.showEditor = !this.showEditor;
  }

  onSave(name: string): void {
    this.store.dispatch(addSection({
      id: uuid(),
      projectId: this.projectId, 
      name,
      order: this.order,
    }))
  }
}
