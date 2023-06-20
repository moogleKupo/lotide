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

  function middle(arr) {
    let indexOdd = [];
    let indexEven = [];

    if(arr.length < 2) {
      return [];
    } else if ((arr.length % 2) != 0) {
      indexOdd.push(arr[Math.floor((arr.length + 1) / 2 - 1)]);
        return indexOdd;
    } else {
      indexEven.push(arr[arr.length / 2 - 1], arr[arr.length / 2]);
      return indexEven;
    }
  }

    //test

   console.log(middle([1, 2, 3, 4]));
    console.log(middle([1, 2, 3, 4, 5, 6]));