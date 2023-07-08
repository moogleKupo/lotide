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

* const head   = require('./head');
* const tail   = require('./tail');
* const middle = require('./middle');
* const assertArraysEqual = require('./assertArraysEqual');
* const assertEqual = require('./assertEqual');
* const assertObjectsEqual = require('./assertObjectsEqual');
* const countLetters = require('./countLetters');
* const countOnly = require('./countOnly');
* const eqArray = require('./eqArray');
* const eqObjects = require('./eqObjects');
* const findKey = require('./findKey');
* const findKeyByValue = require('./findKeyByValue');
* const flatten = require('./flatten');
* const letterPositions = require('./letterPositions');
* const map = require('./map');
* const takeUntil = require('./takeUntil');
* const without = require('./without');
