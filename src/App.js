import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';

function App() {

  return (
    <>
      <Switch>
        <Route path={['/', '/home']}>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
