import { createReducer, on } from '@ngrx/store';

import { clearUserState, setUser } from './actions';

export interface IUserState {
  readonly user: any;
}

const initialState: IUserState = {
  user: undefined,
};

export const userReducer = createReducer(
  initialState,
  on(setUser, (state, { user }) => ({ user })),
  on(clearUserState, (state) => ({
    ...state,
    user: undefined,
  }))
);
