import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayComponent } from './pages/day/day.component';
import { ProjectComponent } from './pages/project/project.component';
import { WeekComponent } from './pages/week/week.component';

const routes: Routes = [
  { path: 'today', component: DayComponent},
  { path: 'inbox', component: ProjectComponent },
  { path: 'day/:date', component: DayComponent },
  { path: 'project/:id', component: ProjectComponent },
  { path: 'week/:week', component: WeekComponent },
  { path: '**',   redirectTo: '/today'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
