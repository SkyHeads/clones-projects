import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default App;
