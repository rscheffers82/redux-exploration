var redux = require('redux');

console.log('Starting redux example');


var reducer = (state = {name: 'anonymous'}, action) => {
  // the above is ES6 syntax, below ES5.
  // If no state is provided, set an object, else state = state
  // state = state || {name: 'Anonymouse'};
  console.log('New action', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
          ...state,
          name: action.name
      };
    default:
      return state;
  }

  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState ', currentState);

var action = {
  // only requirement is type, it resembles the action name
  type: 'CHANGE_NAME',
  name: 'Roy Scheffers'
};

store.dispatch(action);
console.log('Name should be Roy', store.getState() );
