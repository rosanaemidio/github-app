import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components';

import { List } from './pages';

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Switch>
          <Route  path={'/'} render={props => <List { ...props } /> } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
