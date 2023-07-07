const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence){
  const counts = {};

  // remove spaces
  const noSpaceSentence = sentence.replace(/\s/g, '');
  
  for (let letter of noSpaceSentence){
    if (counts[letter]){
      counts[letter] += 1;
    } else {
      counts[letter] = 1;
    }
  }
  return counts;
};

//test 

// Example usage
const sentence = 'LHL';
const letterCounts = countLetters(sentence);
console.log(letterCounts);

module.exports = countLetters;