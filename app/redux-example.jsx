var redux = require('redux');

console.log('Starting redux example');


var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to CHANGE_SEARCH_TEXT    subscribe to dispatches means that on a dispatch or change execute code
var unsubscribe = store.subscribe( () => {
  var state = store.getState();

  console.log('Store state: ', state);

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'loading';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+ state.map.url +'" target="_blank">View Your Location</a>'
  }

});
// unsubscribe();
 // console.log('currentState ', store.getState() );

// A set of dispatches to the store

store.dispatch( actions.fetchLocation() );

store.dispatch( actions.changeName('Roy Scheffers') );

store.dispatch( actions.addHobby('hiking') );
store.dispatch( actions.addHobby('walking') );
store.dispatch( actions.removeHobby(2) );

store.dispatch( actions.changeName('Zorana') );

store.dispatch( actions.addMovie('Lock, stock, and two smoking barrels','action') );
store.dispatch( actions.addMovie('Lion King', 'educational') );
store.dispatch( actions.removeMovie(1) );

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
