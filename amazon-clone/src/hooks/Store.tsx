import React, { createContext, useReducer } from 'react';

export interface IState {
  basket: Array<any>;
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  basket: [],
};

export const Store = createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return { ...state, basket: [...state.basket, action.payload] };
    default:
      return state;
  }
}

export function getBasketTotal(basket: Array<any>): IState {
  return basket?.reduce((amount, item) => item.price + amount, 0);
}

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
