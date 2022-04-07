import { ActionReducerMap } from "@ngrx/store";
import { userReducer, IUserState } from './reducers';

export interface IState {
  readonly user: IUserState;
}

export const reducers: ActionReducerMap<IState> = {
  user: userReducer,
};

