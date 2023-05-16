import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getNextWeek, getPrevWeek, getWeek } from 'src/app/shared/utils';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {
  week: number;
  year: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.setData(params['week']);
  
      if (!this.week) {
        this.router.navigate(['week', `${getWeek()}`]);
      }
    })
  }

  goToPrevWeek(): void {
    this.router.navigate(['week', `${getPrevWeek(this.week, this.year)}`]);
  }

  goToNextWeek(): void {
    this.router.navigate(['week', `${getNextWeek(this.week, this.year)}`]);
  }

  private setData(weekParam: string | undefined): void {
    if (!weekParam) {
      return;
    }

    const weekArr = weekParam.split('-');
    const week = +weekArr[0];
    const year = +weekArr[1];
    const actualYear = new Date().getFullYear();

    if (week > 52 || week < 1 || year > (actualYear + 1) || year < actualYear) {
      return;
    }

    this.week = week;
    this.year = year;
  }
}