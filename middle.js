const eqArray = require('./eqArray');
const assertArraysEqual = require('./assertArraysEqual');

  function middle(arr) {
    let indexOdd = [];
    let indexEven = [];

    if(arr.length < 2) {
      return [];
    } else if ((arr.length % 2) != 0) {
      indexOdd.push(arr[Math.floor((arr.length + 1) / 2 - 1)]);
    } else {
      indexEven.push(arr[arr.length / 2 - 1], arr[arr.length / 2]);
    }
      return indexOdd.length > 0 ? indexOdd : indexEven;
  }
  //console.log(middle([1, 2, 3, 4]));
  //console.log(middle([1, 2, 3, 4, 5, 6, 7]));

    module.exports = middle;