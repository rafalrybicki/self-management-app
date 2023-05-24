import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State, Task } from 'src/app/shared/models';
import { selectDoneTasks, selectTasksBySection } from 'src/app/store/tasks.selectors';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() name: string;
  @Input() id: string;
  @Input() doneSection: boolean = false;

  tasks$: Observable<Task[]>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    if (this.doneSection) {
      this.tasks$ = this.store.select(selectDoneTasks, this.id!)
    } else {
      this.tasks$ = this.store.select(selectTasksBySection, this.id);
    }
  }
}