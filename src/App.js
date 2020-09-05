import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import Search from './pages/Search';
import About from './pages/About';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/about" exact component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
