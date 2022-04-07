import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/shared/interfaces/user';

const namespace = '[USER]';

export const setUser = createAction(
  `${namespace} add user`,
  props<{ user: IUser }>()
);

export const clearUserState = createAction(`${namespace} clear user state`);
