import { ActionReducerMap } from "@ngrx/store";
import { globalReducer, IGlobalState } from "./reducers";

export interface IState {
  readonly global: IGlobalState;
}

export const reducers: ActionReducerMap<IState> = {
  global: globalReducer
}

