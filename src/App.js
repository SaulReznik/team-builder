import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Account from './components/Account';
import { companiesFetchData } from './redux/actions';

import { BASE_URL } from './constants/baseUrl';

class App extends React.Component{
  componentDidMount() {
    this.props.fetchCompanies(`${BASE_URL}companies`)
  }

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


const mapDispatchToProps = (dispatch) => {
  return {
    fetchCompanies: url => dispatch(companiesFetchData(url))
  };
}

export default connect(null, mapDispatchToProps)(App);
