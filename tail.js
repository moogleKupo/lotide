let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TAIL FUNCTION
let tail = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr.slice(1);
  }
};

//TEST CODE
console.log(tail([1, 2, 3]));