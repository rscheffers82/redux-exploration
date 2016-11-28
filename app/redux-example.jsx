var redux = require('redux');

console.log('Starting redux example');


var reducer = (state = {name: 'anonymous'}, action) => {
  // the above is ES6 syntax, below ES5.
  // If no state is provided, set an object, else state = state
  // state = state || {name: 'Anonymouse'};

  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState ', currentState);
