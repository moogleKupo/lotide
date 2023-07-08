# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mooglekupo/lotide`

**Require it:**

`const _ = require('@mooglekupo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

`function assertArraysEqual(actual, expected)` : Checks if two arrays are equal
`function assertEqual(actual, expected)` : Compare two values and print out a message indicating if they are equal
`function assertObjectsEqual (actual, expected)` : Compares two object and checks if they are equal
`function countLetters(sentence)` : Counts the number of letters in a sentence
`function countOnly(allItems, itemsToCount)` : Counts the number of times a specified item appears in an array
`function eqArray(numbers1, numbers2)` : Checks if two arrays are the same length
`function eqObjects(object1, object2)` : Checks if two objects have the same keys with the same values
`function findKey(object, callback)` : Searches for a key in an object based on a specified condition. It takes in an object and a callback function as parameters and returns the key that satisfies the condition, or undefined if no such key is found.
`function findKeyByValue(obj, val)` : Searches for a key in an object based on a specified value. It takes in an object and a value as parameters and returns the key that corresponds to the value, or undefined if no such key is found.
`function flatten(arr)` : Takes an array that has arrays as values and morphs it in to one array with multiple values
`function head = function(arr)` : Takes an array as a parameter and returns the value of index[0]
`function letterPositions(sentence)` : Takes a sentence string and tells you the index of each letter
`function map(array, cb)` : Higher-order function that applies a callback function (cb) to each element in an array and outputs the transformed array results
`function middle(arr)` : Takes an array and finds the middle value of the array. Output will have be a one value array if the length is odd or two values if the array length is even
`function tail(arr)` : Takes an array, Creates a new array with all of the values except the first index of initial array
`function takeUntil(array, callback)` : collects elements from the beginning of an array until a specified condition is met. It returns a new array containing the collected elements. It is commonly used to extract a portion of an array based on a condition.
`function without(sourceArr, itemsToRemoveArr)` : Creates a new array that excludes specific elements from a source array based on the elements in the itemsToRemoveArr. It is commonly used to filter out unwanted elements from an array.
