import React from 'react';

import Header from './components/Header';
import Home from './components/Home';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      {/* HEADER */}
      <Header />
      {/* HOME */}
      <Home />
    </>
  );
}

export default App;
