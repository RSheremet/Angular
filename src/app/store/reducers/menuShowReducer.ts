import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from '@ngrx/store';

export type ShowMenuState = {
  isMenuShown: boolean
  currentColor: string
};

export const showHide = createAction('[SHOW_MENU] change menu shown state');
export const changeCurrentColor = createAction('[SHOW_MENU] change current color', props<{currentColor: string}>());

const InitialState: ShowMenuState = {
  isMenuShown: false,
  currentColor: '#000'
};

export const showMenuReducer = createReducer(
  InitialState,
  on(showHide, state => ({
    ...state,
    isMenuShown: !state.isMenuShown
  })),
  on(changeCurrentColor, (state, action) => ({
    ...state,
    currentColor: action.currentColor
  })),
);

export const menuSelector = createFeatureSelector<ShowMenuState>('menuShown');
export const isMenuShownSelector = createSelector(menuSelector, state => state.isMenuShown);
export const getCurrentColor = createSelector(menuSelector, state => state.currentColor);

export const selectColor = (state: ShowMenuState) => state.currentColor;

if (typeof window !== 'undefined') {
  window.menuSelector = menuSelector;
}
declare global {
  interface Window {
    menuSelector: typeof menuSelector;
  }
}
