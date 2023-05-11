import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  date: Date;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.setDate(params['date']);
  
      if (!this.date) {
        this.router.navigateByUrl('today');
      }
    })
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

    this.date = new Date(`${dateArr[2]} ${dateArr[1]} ${dateArr[0]}`);
  } 
}