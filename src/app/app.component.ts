import { Component } from '@angular/core';
import {MenuService} from './services/menu.service';
import {colorSelector, dateSelector} from './store/reducers/counterReducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [`.dynamicStyle{background-color: red}`]
})
export class AppComponent {
  /*@ViewChild('pRef') pRef: ElementRef;*/
  appColor$ = this.store.select(colorSelector);
  constructor(private menuService: MenuService, private store: Store) {}
  title = 'Главная страница сайта';
  chosenNav = 'first';
  chooseNav(nav): void {
    this.chosenNav = nav;
  }
  showMenu(): void {
    this.menuService.showMenu();
  }
}
