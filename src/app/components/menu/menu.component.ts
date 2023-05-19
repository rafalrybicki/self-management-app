import { Component } from '@angular/core';
import { getFormattedDate, getWeek } from 'src/app/shared/utils';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  tomorrowUrl: string = '/day/' + getFormattedDate(new Date(Date.now() + 86400000));
  actualWeekUrl: string = '/week/' + getWeek();

  toggleMenu(): void {
    document.querySelector('app-menu')?.classList.toggle('open');
  } 
}
