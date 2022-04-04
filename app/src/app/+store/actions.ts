import { createAction, props } from '@ngrx/store';
import { IProduct } from '../shared/interfaces/product';

const namespace = '[GLOBAL]';

export const incrementCounter = createAction(`${namespace} increment counter`);

export const addItem = createAction(
  `${namespace} add item`,
  props<{ item: IProduct }>()
);

export const clearCart = createAction(`${namespace} clear cart`);
