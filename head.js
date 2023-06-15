let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("a", "a");
assertEqual(1, "1");

//Head Function
let head = function(arr){
  if (arr.length === 0){
    return undefined;
  }
return a[0];
}

//TEST CODE
assertEqual(actual, expected){
  if (actual === expected){
    console.log(`✅TEST PASSED! ${actual} equals ${expected}`);
  } else {
    console.log(`❌TEST FAILED! Expected ${expected} but got ${actual}`);
  }
}