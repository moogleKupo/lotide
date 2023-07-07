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

  function assertArraysEqual(actual, expected) {
    if (eqArray(actual, expected)) {
      console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
    }
  }

const letterPositions = function(sentence) {
  const positions = {};
  const noSpaceSentence = sentence.replace(/\s/g, '');
    for (let i = 0; i < sentence.length; i++) {
const letter = sentence[i];
      if (letter !== ' ') {
          if (positions[letter]) {
            positions[letter].push(i);
      } else {
        positions[letter] = [i];
      }
  }
}
  return positions;
}
/*
assertArraysEqual(letterPositions("hello").e, [1]);
*/

module.exports = letterPositions;