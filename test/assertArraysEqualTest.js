const assertArraysEqual = require('../assertArraysEqual');
const eqArray = require('../eqArray');
//test
// Test # 1: Arrays with the same elements in the same order
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
assertArraysEqual(arr1, arr2);

// Test # 2: Arrays with different elements
const arr3 = [1, 2, 3];
const arr4 = [1, 4, 3];
assertArraysEqual(arr3, arr4);

// Test # 3: Arrays with different lengths
const arr5 = [1, 2, 3];
const arr6 = [1, 2];
assertArraysEqual(arr5, arr6);

// Test # 4: Empty arrays
const arr7 = [];
const arr8 = [];
assertArraysEqual(arr7, arr8);

// Test # 5: Arrays with string elements
const arr9 = ["cat", "dog", "rabbit"];
const arr10 = ["cat", "dog", "rabbit"];
assertArraysEqual(arr9, arr10);