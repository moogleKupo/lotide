const assertEqual = require('../assertEqual');
const head = require('../head');


// Test Case 1: Array with multiple elements
const arr1 = [1, 2, 3, 4, 5];
const expected1 = 1;
const actual1 = head(arr1);
assertEqual(actual1, expected1);

// Test Case 2: Empty array
const arr2 = [];
const expected2 = undefined;
const actual2 = head(arr2);
assertEqual(actual2, expected2);

// Test Case 3: Array with a single element
const arr3 = [6];
const expected3 = 6;
const actual3 = head(arr3);
assertEqual(actual3, expected3);

// Test Case 4: Array with string elements
const arr4 = ["bus", "car", "hatchback"];
const expected4 = "bus";
const actual4 = head(arr4);
assertEqual(actual4, expected4);

// Test Case 5: Array with boolean elements
const arr5 = [true, false, true];
const expected5 = true;
const actual5 = head(arr5);
assertEqual(actual5, expected5);