const assertEqual = require('./assertEqual')
  
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

/* Example usage
const sentence = 'LHL';
const letterCounts = countLetters(sentence);
console.log(letterCounts);
*/
module.exports = countLetters;