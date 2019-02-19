import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const addLoggingToDispatch = store => next => action => {
    let dispatch = store.dispatch(action);
  };

  const middleware = store => next => action => {
    let result = next(action);
    return result;
  }

  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});