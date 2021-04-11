import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {counterReducer, CounterState} from './reducers/counterReducer';
import {showMenuReducer, ShowMenuState} from './reducers/menuShowReducer';

export interface State {
  counter: CounterState;
  menuShown: ShowMenuState;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  menuShown: showMenuReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

if (typeof window !== 'undefined') {
  window.store = reducers;
}
declare global {
  interface Window {
    store: typeof reducers;
  }
}
