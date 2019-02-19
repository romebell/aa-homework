import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  // Phase 1: addLoggingToDispatch
  
  const preloadedState = localStorage.state ?
  JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
  store.dispatch = addLoggingToDispatch(store);
  
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});




const addLoggingToDispatch = store => {
  
  let storeDispatch = store.dispatch;
  
  return action => {
    console.log(store.getState());
    console.log(action);
    storeDispatch(action);
    console.log(store.getState());
  }
}

// window.addLoggingToDispatch = addLoggingToDispatch;

// const addLoggingToDispatch = store => next => action => {
//   let dispatch = store.dispatch(action);

// };

// const middleware = store => next => action => {
//   let result = next(action);
//   return result;
// }


// // taken from the notes.
// const calculator = function (operationCb) {
//   return function (op1, op2) {
//     console.log(`calling with ${op1} ${op2}`)
//   }
// }


// const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
// const thunkActionCreator = () => dispatch => {
//   dispatch({
//     type: RECEIVE_MESSAGE,
//     message: "This will be dispatch immediately."
//   });

//   setTimeout(() => dispatch ({
//     type: RECEIVE_MESSAGE,
//     message: "This will be dispatch 1 second later."
//   }, 1000));
// }

// // middleware/thunk_middleware.js
// const thunk = ({dispatch, getState}) => next => action => {
//   if (typeof action === 'function') {
//     return action(dispatch, getState);
//   }
//   return next(action);
// }









