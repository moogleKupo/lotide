const tail   = require('../tail');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
describe('tail', () => {
  it('should return an empty array for an empty input array', () => {
    const input = [];
    const expectedOutput = [];
    assert.deepEqual(tail(input), expectedOutput);
  });

  it('should return the tail of an array with multiple elements', () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [2, 3, 4, 5];
    assert.deepEqual(tail(input), expectedOutput);
  });

  it('should return an empty array for an array with a single element', () => {
    const input = [1];
    const expectedOutput = [];
    assert.deepEqual(tail(input), expectedOutput);
  });
});

module.exports = tail;


/* Pre-mocha/chai TEST CODE
const tail = require('../tail');

console.log(tail([1, 2, 3]));
*/
