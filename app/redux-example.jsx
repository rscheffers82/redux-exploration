var redux = require('redux');

console.log('Starting redux example');


var reducer = (state = {name: 'anonymous'}, action) => {
  // the above is ES6 syntax, below ES5.
  // If no state is provided, set an object, else state = state
  // state = state || {name: 'Anonymouse'};
  // console.log('New action', action);
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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to CHANGE_SEARCH_TEXT
var unsubscribe = store.subscribe( () => {
  var state = store.getState();

  console.log('Name is ', state.name);
  document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();
 // console.log('currentState ', store.getState() );

store.dispatch({
  // only requirement is type, it resembles the action name
  type: 'CHANGE_NAME',
  name: 'Roy Scheffers'
});



store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Zorana'
});
