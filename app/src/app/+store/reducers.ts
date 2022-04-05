import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../shared/interfaces/product';
import {
  addItem,
  clearGlobalState,
  incrementCounter,
  removeItem,
} from './actions';

export interface IGlobalState {
  readonly counter: number;
  readonly items: IProduct[];
}

const initialState: IGlobalState = {
  counter: 0,
  items: [],
};

export const globalReducer = createReducer(
  initialState,
  on(incrementCounter, (state) => ({ ...state, counter: state.counter + 1 })),
  on(addItem, (state, { item }) => ({
    ...state,
    items: [...state.items, item],
  })),
  on(removeItem, (state, { item }) => ({
    ...state,
    items: [...state.items.filter((x) => x !== item)],
    counter: state.counter - 1,
  })),
  on(clearGlobalState, (state) => ({
    ...state,
    items: [],
    counter: 0,
  }))
);
