import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Главная страница сайта';
  chosenNav = 'first';
  chooseNav(nav): void {
    this.chosenNav = nav;
  }
}
