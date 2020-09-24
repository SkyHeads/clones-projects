import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';

import { StoreProvider } from './hooks/Store';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </StoreProvider>
  );
};

export default App;
