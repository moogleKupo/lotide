const assertArraysEqual = require('./assertArraysEqual')
const eqArray = rewuire('./eqArray')

  function flatten(arr) {
    let flatArray = [];
    for (let i = 0; i < arr.length; i++){
      if (Array.isArray(arr[i])){
        flatArray.push(...arr[i]);
      } else flatArray.push(arr[i]);      
    }
    return flatArray;
  }

module.exports = flatten;