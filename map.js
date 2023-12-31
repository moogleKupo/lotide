const eqArray = require('./eqArray')
const assertArraysEqual = require('./assertArraysEqual')

const map = function(array, cb) {
  const results = [];
  for (let item of array) {
    results.push(cb(item));
  }
return results;
}

module.exports = map;
