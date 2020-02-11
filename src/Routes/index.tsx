import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../pages/Home';
import Film from '../pages/Film';
import history from './history';

export default function Pages() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/filme" exact component={Film} />
      </Switch>
    </Router>
  );
}
