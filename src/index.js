import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './App';
import { companies, companiesHaveError, companiesAreLoading } from './redux/reducers';

const rootReducer = combineReducers({
  companies,
  companiesHaveError,
  companiesAreLoading
})

const enhancer = applyMiddleware(thunk);

const store = createStore(rootReducer, {}, composeWithDevTools(enhancer));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
