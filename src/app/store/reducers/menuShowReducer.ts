import {createAction, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';

export type ShowMenuState = {
  isMenuShown: boolean
};

export const showHide = createAction('[SHOW_MENU] change menu shown state');

const InitialState: ShowMenuState = {
  isMenuShown: false
};

export const showMenuReducer = createReducer(
  InitialState,
  on(showHide, state => ({
    ...state,
    isMenuShown: !state.isMenuShown
  })),
);

export const menuSelector = createFeatureSelector<ShowMenuState>('menuShown');
export const isMenuShownSelector = createSelector(menuSelector, state => state.isMenuShown);

if (typeof window !== 'undefined') {
  window.menuSelector = menuSelector;
}
declare global {
  interface Window {
    menuSelector: typeof menuSelector;
  }
}
