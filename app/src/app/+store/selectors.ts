import { createSelector } from '@ngrx/store';
import { IState } from './index';

export const selectGlobal = (state: IState) => state.global;

export const selectGlobalCounter = createSelector(
  selectGlobal,
  (state) => state.counter
);
