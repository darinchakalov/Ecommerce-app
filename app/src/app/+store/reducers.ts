import { createReducer, on } from '@ngrx/store';
import { addItem, incrementCounter } from './actions';

export interface IGlobalState {
  readonly counter: number;
  readonly items: any[];
}

const initialState: IGlobalState = {
  counter: 0,
  items: [],
};

export const globalReducer = createReducer(
  initialState,
  on(incrementCounter,(state) => ({ ...state, counter: state.counter + 1 })),
  on(addItem, (state, { item }) => ({
    ...state,
    items: [...state.items, { content: item }],
  }))
);
