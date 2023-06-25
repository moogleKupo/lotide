const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, cb) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', cb(item));
    console.log('---');
  }
return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

