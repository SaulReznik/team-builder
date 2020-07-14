import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Account from './components/Account';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={props => <Home {...props} /> } />
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/registration" render={props => <Registration {...props} />} />
          <Route exact path="/account" render={props => <Account {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
