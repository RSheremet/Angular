import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from '@ngrx/store';

export type CounterState = {
  count: number
  date: string
  color: string
}

export const increase = createAction('[COUNTER] increase');
export const decrease = createAction('[COUNTER] decrease');
export const makeZero = createAction('[COUNTER] make zero');
export const dateRefresh = createAction('[COUNTER] date refresh', props<{createdAt: string}>());
export const changeColor = createAction('[COUNTER] change color', props<{color: string}>());

const InitialState: CounterState = {
  count: 5,
  date: `${new Date().getDate()} ${new Date().getMonth()} ${new Date().getFullYear()}`,
  color: '#fff'
};

export const counterReducer = createReducer(
  InitialState,
  on(increase, state => ({
    ...state,
    count: state.count + 1
  })),
  on(decrease, state => ({
    ...state,
    count: state.count - 1
  })),
  on(makeZero, state => ({
    ...state,
    count: 0
  })),
  on(dateRefresh, (state, action) => ({
    ...state,
    date: action.createdAt
  })),
  on(changeColor, (state, action) => ({
    ...state,
    color: action.color
  })),
);

export const featureSelector = createFeatureSelector<CounterState>('counter');
export const countSelector = createSelector(featureSelector, state => state.count);
export const dateSelector = createSelector(featureSelector, state => state.date);
export const colorSelector = createSelector(featureSelector, state => state.color);

if (typeof window !== 'undefined') {
  window.featureSelector = featureSelector;
}
declare global {
  interface Window {
    featureSelector: typeof featureSelector;
  }
}

