const assertArraysEqual = require('../assertArraysEqual');

//test
console.group(assertArraysEqual([1,2,3], [1,2,3]));
console.group(assertArraysEqual([1,2,4], [1,2,3]));