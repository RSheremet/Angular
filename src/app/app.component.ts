import { Component } from '@angular/core';
import {MenuService} from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private menuService: MenuService) {
  }
  title = 'Главная страница сайта';
  chosenNav = 'first';
  chooseNav(nav): void {
    this.chosenNav = nav;
  }
  showMenu(): void {
    this.menuService.showMenu();
  }
}
