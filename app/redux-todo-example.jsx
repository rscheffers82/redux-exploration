var redux = require('redux');

console.log('Starting Redux Todo example');


// ______________________________________________
//
//                    Reducer
// ______________________________________________

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
}
var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
return state;
};

// Instead of only calling the createStore function with reducer, we call it with an additional argument which allows us to debug the app
// var store = redux.createStore(reducer){};
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
// console.log('Initial state of the store', store.getState() );

// subscribe to changes
var unsubscribe = store.subscribe( () => {
  var state = store.getState();

  document.getElementById('app').innerHTML = state.searchText;
});


store.dispatch({
  // only requirement is type, it resembles the action name
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Clean Kitchen'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Walk the dog'
});

unsubscribe();

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Roy Scheffers'
});
// console.log('searchText should be "Roy"', store.getState() );
