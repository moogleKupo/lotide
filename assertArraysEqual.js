function eqArray(numbers1, numbers2) {
  if (numbers1.length !== numbers2.length) {
    console.log('false');
  }
  for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] !== numbers2[i]){
      console.log('false');
      } else {
        console.log('true');
      }
    }
  }
  //test