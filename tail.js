const assertEqual = require('./assertEqual');

//TAIL FUNCTION
let tail = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr.slice(1);
  }
};

module.exports = tail;