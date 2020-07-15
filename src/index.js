import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import { items, itemsHaveError, itemsAreLoading } from './redux/reducers';

const rootReducer = combineReducers({
  items,
  itemsHaveError,
  itemsAreLoading
})

const enhancer = applyMiddleware(thunk);

const store = createStore(rootReducer, {}, enhancer);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
