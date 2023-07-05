const eqArray = require('../eqArray');
const assertEqual = require('../assertEqual');
//test
console.log(eqArray([1,2,3], [1,2,3]));

// Test # 1: Arrays with the same elements in the same order
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
assertEqual(eqArray(arr1, arr2), true);

// Test # 2: Arrays with different elements
const arr3 = [1, 2, 3];
const arr4 = [1, 4, 3];
assertEqual(eqArray(arr3, arr4), false);

// Test # 3: Arrays with different lengths
const arr5 = [1, 2, 3];
const arr6 = [1, 2];
assertEqual(eqArray(arr5, arr6), false);

// Test # 4: Empty arrays
const arr7 = [];
const arr8 = [];
assertEqual(eqArray(arr7, arr8), true);

// Test # 5: Arrays with string elements
const arr9 = ["bus", "car", "hatchback"];
const arr10 = ["bus", "car", "hatchback"];
assertEqual(eqArray(arr9, arr10), true);