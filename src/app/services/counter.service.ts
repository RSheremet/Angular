import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {countSelector, dateSelector, decrease, increase, makeZero} from '../store/reducers/counterReducer';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counterValue$ = this.store.select(countSelector);
  counterDate$ = this.store.select(dateSelector);
  constructor(private store: Store) {}
  increaseValue(): void {
    this.store.dispatch(increase());
  }
  decreaseValue(): void {
    this.store.dispatch(decrease());
  }
  makeCounterZero(): void {
    this.store.dispatch(makeZero());
  }
}
