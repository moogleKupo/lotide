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

  let flatArray = [];
  function flatten(arr) {
    for (let i = 0; i < arr.length; i++){
      if (Array.isArray(arr[i])){
        flatArray.push(...arr[i]);
      } else flatArray.push(arr[i]);      
    }
    return flatArray;
  }
  //test
  console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]