const head   = require('../head');
const assert = require('chai').assert;
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});

const assertEqual = require('../assertEqual');


/* Test # 1: Array with multiple elements
const arr1 = [1, 2, 3, 4, 5];
const expected1 = 1;
const actual1 = head(arr1);
assertEqual(actual1, expected1);

// Test # 2: Empty array
const arr2 = [];
const expected2 = undefined;
const actual2 = head(arr2);
assertEqual(actual2, expected2);

// Test # 3: Array with a single element
const arr3 = [6];
const expected3 = 6;
const actual3 = head(arr3);
assertEqual(actual3, expected3);

// Test # 4: Array with string elements
const arr4 = ["bus", "car", "hatchback"];
const expected4 = "bus";
const actual4 = head(arr4);
assertEqual(actual4, expected4);

// Test # 5: Array with boolean elements
const arr5 = [true, false, true];
const expected5 = true;
const actual5 = head(arr5);
assertEqual(actual5, expected5);
*/