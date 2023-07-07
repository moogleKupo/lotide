function assertArraysEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
}

function eqArray(numbers1, numbers2) {
  if (numbers1.length !== numbers2.length) {
    return false;
  }
  for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] !== numbers2[i]){
      return false;
      }
    }
    return true;
  }

  /* my attempt using _.without
  the issue is that it requires the implementation of the Underscore library... 
  not sure how to do that yet, but this function will work if the library is included.
  */

  function without(sourceArr, itemsToRemoveArr) {
    resultArr = _.without(sourceArr, ...itemsToRemoveArr);
    return resultArr;
  }
  /* test
  console.log(without([1,2,3,7,8,9], [3,7]));

  //native javascript

  function without(sourceArr, itemsToRemoveArr) {
    return sourceArr.filter(item => !itemsToRemoveArr.includes(item));
  }
  //test
  console.log(without([1,2,3,7,8,9], [3,7]));
  */

  module.exports = without;
  