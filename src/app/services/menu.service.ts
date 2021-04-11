import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {isMenuShownSelector, showHide} from '../store/reducers/menuShowReducer';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  isMenuShown = this.store.select(isMenuShownSelector);
  constructor(private store: Store) {}
  showMenu(): void {
    this.store.dispatch(showHide());
  }
}
