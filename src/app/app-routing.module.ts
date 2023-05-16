import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayComponent } from './pages/day/day.component';
import { WeekComponent } from './pages/week/week.component';

const routes: Routes = [
  { path: 'today', component: DayComponent},
  { path: 'day/:date', component: DayComponent },
  { path: 'week/:week', component: WeekComponent },
  { path: '**',   redirectTo: '/today'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
