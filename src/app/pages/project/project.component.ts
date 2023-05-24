import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, first, map } from 'rxjs';
import { Section, State, Task } from 'src/app/shared/models';
import { inboxId } from 'src/app/shared/utils';
import { selectProject } from 'src/app/store/projects.selectors';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  id: string;
  name: string | undefined;
  sections: Section[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const projectId = this.router.url === '/inbox' ? inboxId : params['id'];
      
      this.store.select(selectProject, projectId).pipe(first()).subscribe(project => {
        this.id = project?.id!;
        this.name = project?.name;
        this.sections = project?.sections!;
      });
      
      if (!this.id) {
        this.router.navigateByUrl('inbox');
      }
    })
  }
}