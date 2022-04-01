export interface IAppState {
  counter: number;
  value: any;
}

const initialState: IAppState = {
  counter: 0,
  value: null,
};

export function appReducer(state: any = initialState, action: any) {
  if (action.type === 'INC') {
    return { ...state, counter: state.counter + 1 };
  }
  return state;
}
