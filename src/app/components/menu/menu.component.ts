import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Project, State } from 'src/app/shared/models';
import { getFormattedDate, getWeek } from 'src/app/shared/utils';
import { selectProjects } from 'src/app/store/projects.selectors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  tomorrowUrl: string = '/day/' + getFormattedDate(new Date(Date.now() + 86400000));
  actualWeekUrl: string = '/week/' + getWeek();
  projects$: Observable<Project[]>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.projects$ = this.store.select(selectProjects);
  }

  toggleMenu(): void {
    document.querySelector('app-menu')?.classList.toggle('open');
  } 
}
