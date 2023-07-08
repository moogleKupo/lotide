const eqArray = require('./eqArray')
const assertArraysEqual = require('./assertArraysEqual')

const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      return result;
    }
    result.push(item);
  }
  return result;
};
module.exports = takeUntil;