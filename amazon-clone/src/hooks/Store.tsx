import React, { createContext, useReducer } from 'react';

interface IState {
  basket: Array<any | undefined>;
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

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
