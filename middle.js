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
    let indexOdd = ((arr.length + 1) / 2);
    let indexEven = ((arr.length) / 2);
    if(arr.length < 2) {
      return [];
    } else if ((arr.length % 2) != 0) {
      console.log(arr[indexOdd]);
        return indexOdd;
    } else {
      console.log(arr[indexEven]);
      return arr[indexEven];
    }

    //test

   console.log(middle([1, 2, 3, 4]));
    console.log(middle([1, 2, 3, 4, 5, 6]));

    
  }