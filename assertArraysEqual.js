const eqArray = require('./eqArray.js');

function assertArraysEqual(actual, expected) {
  if (eqArray(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
module.exports = assertArraysEqual;