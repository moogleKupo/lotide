const takeUntil = function(array, callback) {
let newArray = [];
  for (item of array){
    if (!callback(item)) {
      return newArray;
    } newArray.push(item);
  }
      return newArray;
console.log(newArray)
}

console.log(takeUntil([1,2,-4,5], x => x > 0))