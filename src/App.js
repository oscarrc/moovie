import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Detail } from './pages/detail';
import { NotFound } from './pages/notFound';

import './App.css';
import 'bulma/css/bulma.min.css';
import '@mdi/font/css/materialdesignicons.min.css'

class App extends Component {
  render() {
    return (
      <main id="App">
        <Switch> {/* Used to switch routes  */}
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default App;
