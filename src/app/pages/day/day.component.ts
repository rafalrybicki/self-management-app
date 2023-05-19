import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State, Task } from 'src/app/shared/models';
import { getFormattedDate } from 'src/app/shared/utils';
import { selectTasksByDate, selectDatePercentage } from 'src/app/store/tasks.selectors';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  date: Date;
  dayPercentage$: Observable<String>;
  tasks$: Observable<Task[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.setDate(params['date']);
      
      if (!this.date) {
        this.router.navigateByUrl('today');
      }
    })

    this.tasks$ = this.store.select(selectTasksByDate, { date: getFormattedDate(this.date) });
    this.dayPercentage$ = this.store.select(selectDatePercentage, { date: getFormattedDate(this.date) });
  }

  private setDate(dateParam: string | undefined): void {  
    if (this.router.url === '/today') {
      this.date = new Date();
      return;
    }  

    const dateArr = dateParam?.split('-');
    
    if (!dateArr || dateArr.length < 3 || dateArr[2].length < 4) {
      return;
    }
    
    this.date = new Date(`${dateArr[2]} ${+dateArr[1]} ${dateArr[0]}`);
  } 
}