import { Component } from '@angular/core';
import {MenuService} from '../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private menuService: MenuService) {}
  showMenu(): void {
    this.menuService.showMenu();
  }
}
