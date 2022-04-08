import { createAction, props } from '@ngrx/store';
import { IProduct } from '../shared/interfaces/product';

const namespace = '[GLOBAL]';

export const incrementCounter = createAction(`${namespace} increment counter`);

export const addItem = createAction(
  `${namespace} add item`,
  props<{ item: IProduct; productCount: number }>()
);

export const addExistingItem = createAction(
  `${namespace} add existing item`,
  props<{ item: IProduct; productCount: number }>()
);

export const removeItem = createAction(
  `${namespace} remove item`,
  props<{ item: any }>()
);

export const clearGlobalState = createAction(`${namespace} clear global state`);
