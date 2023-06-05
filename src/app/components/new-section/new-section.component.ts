import { Component, Input } from '@angular/core';
import { Section } from 'src/app/shared/models';

@Component({
  selector: 'app-new-section',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.scss']
})
export class NewSectionComponent {
  @Input({ required: true }) projectId: string;
  @Input({ required: true }) order: number;

  showEditor: boolean = false; 

  toggleEditor(): void {
    this.showEditor = !this.showEditor;
  }
}
