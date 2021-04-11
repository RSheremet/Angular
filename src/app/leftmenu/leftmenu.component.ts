import { Component } from '@angular/core';
import {MenuService} from '../services/menu.service';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.scss']
})
export class LeftmenuComponent {
  isMenuShown$ = this.menuService.isMenuShown;
  constructor(public menuService: MenuService) {}
}
