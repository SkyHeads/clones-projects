import React from 'react';

const initialState = {
  basket: 0,
};

export const Store = React.createContext(initialState);

function reducer() {
  // pass
}

export const StoreProvider: React.FC = ({ children }) => {
  return <Store.Provider value={initialState}>{children}</Store.Provider>;
};
