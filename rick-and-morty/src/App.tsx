import React, { useContext } from 'react';
import { Store } from './Store';

const App: React.FC = () => {
  const store = useContext(Store);
  console.log(store);
  return (
    <>
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode</p>
      <span>{store.basket}</span>
    </>
  );
};

export default App;
