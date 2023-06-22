const letterPositions = function(sentence) {
  const positions = {};
const noSpaceSentence = sentence.replace(/\s/g, '');
for (let i = 0; i < sentence.length -1; i++) {
const letter = sentence[i];
  if (i !== ' ') {
      if (positions[letter]) {
        positions[letter].push(i);
      } else {
        positions[letter] = [i];
      }
  }
}
  return results;
}