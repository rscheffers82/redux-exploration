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
var store = redux.createStore(reducer);


console.log('Initial state of the store', store.getState() );


store.dispatch({
  // only requirement is type, it resembles the action name
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Roy'
});

console.log('searchText should be "Roy"', store.getState() );
