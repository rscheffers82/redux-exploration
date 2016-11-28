var redux = require('redux');

console.log('Starting redux example');

// Pure function (no promises are async functions)
// always returns the same result with the same input
// - Same input as Output
// - No values are updated outside of the function
// - Avoid promises and aSync calls, the should be Syncronise, so no API calls or http:// requests.
function add( a, b) {
  return a + b;
}

// These are not pure functions
var a = 3;
function add (b) {
  return a + b;
}

var result;
function add (a, b) {   // result depends on result outside of the function
  result = a + b;
  return result;
}

function add (a, b) {   // NOT pure as the result is not always the same on the same input. Result depends on a time.
  return a + b + new Date().getSeconds();
}

// AA. top part is a pure function, when using the same function with the commented out lines, it becomes impure
function changeProp(obj) {
  return {
    ...obj,
    name: 'Jen'
  };
  // obj.name = 'Jen';
  //return obj
}

var startingValue = {
  name: 'Roy Scheffers',
  age: 34
};
var res = changeProp(startingValue);

// Does startingValue remain the same? See AA comment
console.log(startingValue);
// Output the new value
console.log(res);
