import { Component } from '@angular/core';
import { getWeek } from 'src/app/shared/utils';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  actualWeek: string = getWeek() + `-${new Date().getFullYear()}`;

  toggleMenu(): void {
    document.querySelector('app-menu')?.classList.toggle('open');
  } 
}
