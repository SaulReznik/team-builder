import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Account from './components/Account';
import Topics from './components/Topics';
import Projects from './components/Projects';
import { companiesFetchData } from './redux/actions';

import PrivateRoute from './components/HOC/PrivateRoute';
import { BASE_URL } from './constants/baseUrl';

class App extends React.Component{
  componentDidMount() {
    this.props.fetchCompanies(`${BASE_URL}companies`);
  }

  render() {
    if (this.props.hasError) return <h1>Sorry, something went wrong...</h1>;

    if (this.props.isLoading) return <h1>Loading...</h1>;

    return (
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/team-builder/" component={() => <Home /> } />
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/registration" render={props => <Registration {...props} />} />
          <PrivateRoute exact path="/account" component={() => <Account />} />
          <PrivateRoute exact path="/topics" component={() => <Topics />}/>
          <PrivateRoute exact path='/projects' component={() => <Projects />} />
          <Route render={()=> <h1>Sorry, the page is not found :(</h1>}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  companies: state.companies,
  hasError: state.dataHaveError,
  isLoading: state.dataIsLoading
})

const mapDispatchToProps = dispatch => ({
    fetchCompanies: url => dispatch(companiesFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
