import { createSelector } from '@ngrx/store';
import { IState } from './index';

export const selectUser = (state: IState) => state.user;

export const selectUserSetter = createSelector(
  selectUser,
  (state) => state.user
);
