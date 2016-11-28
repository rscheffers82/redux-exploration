var redux = require('redux');

console.log('Starting Redux Todo example');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
}
var reducer = (state = stateDefault, action) => {
return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('Current State of the store', currentState);

// Assignment:
// - Creaet a store
// - Create a reduces
//   Default value:
//     searchText, default to ''
//     showCompleted, default to false
//     todos, default []
