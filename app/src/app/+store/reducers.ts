import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../shared/interfaces/product';
import {
  addExistingItem,
  addItem,
  clearGlobalState,
  incrementCounter,
  removeItem,
} from './actions';

export interface IGlobalState {
  readonly counter: number;
  readonly items: { product: IProduct; productCount: number }[];
  // readonly items: any[];
}

const initialState: IGlobalState = {
  counter: 0,
  items: [],
};

export const globalReducer = createReducer(
  initialState,
  on(incrementCounter, (state, { count }) => ({ ...state, counter: count })),
  on(addItem, (state, { item, productCount }) => ({
    ...state,
    items: [...state.items, { product: item, productCount: productCount }],
  })),
  on(addExistingItem, (state, { item, productCount }) => ({
    ...state,
    items: state.items.map((x) =>
      x.product._id == item._id
        ? { product: x.product, productCount: productCount }
        : { product: x.product, productCount: x.productCount }
    ),
  })),
  on(removeItem, (state, { item }) => ({
    ...state,
    items: [...state.items.filter((x) => x.product != item.product)],
    counter: state.counter - item.productCount,
  })),
  on(clearGlobalState, (state) => ({
    ...state,
    items: [],
    counter: 0,
  }))
);
