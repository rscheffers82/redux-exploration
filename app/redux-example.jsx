var redux = require('redux');

console.log('Starting redux example');

var defaultState = {
  name: 'anonymous',
  hobbies: [],
  movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;

var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  };
};

var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
        return state.filter( (hobby) => hobby.id !== action.id );
    default:
      return state;
  }
};

var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ]
    case 'REMOVE_MOVIE':
      return state.filter( (movie) => movie.id !== action.id )
    default:
      return state;
  }
};


var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to CHANGE_SEARCH_TEXT    subscribe to dispatches means that on a dispatch or change execute code
var unsubscribe = store.subscribe( () => {
  var state = store.getState();

  console.log('Store state: ', state);
  document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();
 // console.log('currentState ', store.getState() );

// Make dispatches to the store

store.dispatch({
  // only requirement is type, it resembles the action name
  type: 'CHANGE_NAME',
  name: 'Roy Scheffers'
});



store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Zorana'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'hiking'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Lock, stock, and two smoking barrels',
  genre: 'action'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Lion King',
  genre: 'educational'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});

/*
Write a dispatch first before writing the reducer. This way you already conceptualise what needs to happen


*/


// add movie action
// call it a few times, only add a title and genre and ID
// call it a few times


// initial setup before separating things out

// var oldReducer = (state = defaultState, action) => {
//   // the above is ES6 syntax, below ES5.
//   // If no state is provided, set an object, else state = state
//   // state = state || {name: 'Anonymouse'};
//   //console.log('New action', action);
//   switch (action.type) {
//     case 'CHANGE_NAME':
//       return {
//           ...state,
//           name: action.name
//       };
//       case 'ADD_HOBBY':
//       return  {
//         ...state,
//         hobbies: [
//           ...state.hobbies,
//           {
//             id: nextHobbyId++,
//             hobby: action.hobby
//           }
//         ]
//       };
//     case 'REMOVE_HOBBY':
//       return {
//         ...state,
//         hobbies: state.hobbies.filter( (hobby) => hobby.id !== action.id )
//       };
//     case 'ADD_MOVIE':
//       return {
//         ...state,
//         movies: [
//           ...state.movies,
//           {
//             id: nextMovieId++,
//             title: action.title,
//             genre: action.genre
//           }
//         ]
//       };
//     case 'REMOVE_MOVIE':
//       return {
//         ...state,
//         movies: state.movies.filter( (movie) => movie.id !== action.id )
//       }
//     default:
//       // used if no other action is specified, return the unchanged object
//       return state;
//     }
// };
