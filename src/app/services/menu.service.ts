import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {isMenuShownSelector, selectColor, showHide} from '../store/reducers/menuShowReducer';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  isMenuShown = this.store.select(isMenuShownSelector);
  currentColor = this.store.select(selectColor);
  constructor(private store: Store) {}
  showMenu(): void {
    this.currentColor.pipe();
    this.store.dispatch(showHide());
  }
}
