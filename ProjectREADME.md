##  Dependencies:
1.  React
    -  React-Dom will load with it
2.  React-Bootstrap

##  Referenced:

###  1)  index.js:
1. import { BrowserRouter } from 'react-router-dom';
2. Add <BrowserRouter> around <App />

###  2)  Nodemon - proof of life

###  3)  app.js:
1.  import React from 'react';
2.  import { Switch, Route } from 'react-router-dom';

###  4)  Create the components folder in src

###  5)  Create Home page

###  6)  app.js:
1.  import Home from './components/Home';
2.  Add Switch and Route in the return area
3.  Add <Route exact path={['/', '/home']}> and </Route> after the home route below
3.  Add <Home /> as a route




