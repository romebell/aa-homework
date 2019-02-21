import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { createStore } from 'redux'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // const store = createStore(reducer);
  ReactDOM.render(root);
});