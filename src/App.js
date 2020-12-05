import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

import Search from './pages/Search';
import About from './pages/About';
import NotFound from './pages/NotFound';

import Parallax from './components/Parallax/Parallax';

const App = () =>
  (
    <BrowserRouter>
      <Navigation />
      <Parallax />
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/about" exact component={About} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );

export default App;
