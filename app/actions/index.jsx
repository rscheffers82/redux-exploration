var axios = require('axios');

export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
    // In ES6 the below can be shortened by just typing the name of the var
    // name: name
  };
};

export var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};

export var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};


export var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  };
};

export var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
};


export var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
}

export var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
}

// this function is returning a function instead of an object.
// An action generator in need of calling dispatch outside of the main file.
// The below is required in combo with thunk defined in the store config file.
// Deal with actions that are not objects.
// redux.applyMiddleware(thunk); in the store config file.

// the reason why we do this, is so that action generators, such as below
// can dispatch their own actions.

export var fetchLocation = () => {

  return (dispatch, getState) => {
    dispatch( startLocationFetch() );

    axios.get('http://ipinfo.io').then(function (res) {
      var loc = res.data.loc;
      var baseUrl = 'http://maps.google.com?q=';

      dispatch( completeLocationFetch(baseUrl + loc));
    });
  };

};
