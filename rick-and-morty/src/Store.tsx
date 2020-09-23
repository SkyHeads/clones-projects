import React from 'react';

interface IState {
  episodes: [];
  favourites: [];
}

const initialState: IState = {
  episodes: [],
  favourites: [],
};

export const Store = React.createContext<IState>(initialState);

// function reducer(): void {
//   // pass
// }

export const StoreProvider: React.FC = ({ children }) => {
  return <Store.Provider value={initialState}>{children}</Store.Provider>;
};
