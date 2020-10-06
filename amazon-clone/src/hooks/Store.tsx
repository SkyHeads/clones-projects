import React, { createContext, useReducer, useState, useEffect } from 'react';
import firebase from '../firebase';

type ContextProps = {
  user: firebase.User | null;
  authenticated: boolean;
  setUser: any;
  loadingAuthState: boolean;
};

export interface IState {
  basket: Array<any>;
  user: firebase.User | null;
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  basket: [],
  user: null,
};

export const Store = createContext<IState | ContextProps | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return { ...state, basket: [...state.basket, action.payload] };
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.payload.id,
      );

      const newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Voçe não pode remover o produto (id: ${action.payload.id}), pois ele não está na cesta`,
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
}

export function getBasketTotal(basket: Array<any>): IState {
  return basket?.reduce((amount, item) => item.price + amount, 0);
}

export const StoreProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null as firebase.User | null);
  const [loadingAuthState, setLoadingAuthState] = useState(true);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userLog: any) => {
      setUser(userLog);
      setLoadingAuthState(false);
    });
  }, []);

  return (
    <Store.Provider
      value={{
        state,
        dispatch,
        user,
        authenticated: user !== null,
        setUser,
        loadingAuthState,
      }}
    >
      {children}
    </Store.Provider>
  );
};
