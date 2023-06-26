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

  function assertArraysEqual(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
    }
  }
  
const takeUntil = function(array, callback) {
let newArray = [];
  for (item of array){
    if (!callback(item)) {
      return newArray;
    } newArray.push(item);
  }
      return newArray;
console.log(newArray)
}

console.log(takeUntil([1,2,-4,5], x => x > 0))