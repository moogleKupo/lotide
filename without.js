const assertArraysEqual = require('./assertArraysEqual')
const eqArray = require('./eqArray')

    const without = function(sourceArr, itemsToRemoveArr) {
      const result = [];
      for (let item of sourceArr) {
        if (!itemsToRemoveArr.includes(item)) {
          result.push(item);
        }
      }
      return result;
    };

    /* Tests
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
*/