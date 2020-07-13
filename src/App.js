import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Login from './components/Login';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Redirect to='/login' /> } />
          <Route exact path="/login" render={props => <Login {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
