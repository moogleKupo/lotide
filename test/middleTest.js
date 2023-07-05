const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual.js');
//test
// Test Case 1: Odd-length array
const arr1 = [1, 2, 3, 4, 5];
const expected1 = [3];
const actual1 = middle(arr1);
assertArraysEqual(actual1, expected1);

// Test Case 2: Even-length array
const arr2 = [1, 2, 3, 4];
const expected2 = [2, 3];
const actual2 = middle(arr2);
assertArraysEqual(actual2, expected2);

// Test Case 3: Empty array
const arr3 = [];
const expected3 = [];
const actual3 = middle(arr3);
assertArraysEqual(actual3, expected3);

// Test Case 4: Array with single element
const arr4 = [5];
const expected4 = [];
const actual4 = middle(arr4);
assertArraysEqual(actual4, expected4);

// Test Case 5: Array with two elements
const arr5 = [6, 7];
const expected5 = [6, 7];
const actual5 = middle(arr5);
assertArraysEqual(actual5, expected5);