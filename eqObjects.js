

//variables
const shirtObject = { color: "red", size: "medium"};
const anotherShirtObject = {size: "medium", color: "red" };

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArray(numbers1, numbers2) {
  if (numbers1.length !== numbers2.length) {
    return false;
  }
  for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] !== numbers2[i]){
      return false;
      }
    }
    return true;
  }


const eqObjects = function(object1, object2) {

};

/* console.log(eqObjects(shirtObject, anotherShirtObject));


const longSleeveShirtObject = {size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject);

console.log(assertEqual(shirtObject, anotherShirtObject));
*/

module.exports = eqObjects;