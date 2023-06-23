const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
};
let obj1 = { a: '1', b: 2 };
let obj2 = { b: 2, a: '1' };
console.log(assertObjectsEqual(obj1, obj2));