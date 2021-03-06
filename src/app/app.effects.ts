import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {changeColor, dateRefresh, decrease, increase, makeZero} from './store/reducers/counterReducer';
import {map} from 'rxjs/operators';

@Injectable()
export class AppEffects {
  updatedAt$ = createEffect(() => this.actions$.pipe(
    ofType(increase, decrease, makeZero),
    map(() => dateRefresh({createdAt: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()} ${new Date().getSeconds()}`})))
  );
  changeColor$ = createEffect(() => this.actions$.pipe(
    ofType(increase, decrease, makeZero),
    map(() => changeColor({color: '#000'}))
  ));
  constructor(private actions$: Actions) {}
}
