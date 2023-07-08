const eqArray = require('./eqArray')

  const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = letterPositions;