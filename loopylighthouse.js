let loopyLighthouse = function(range, multiples, words) {
let i = 100
for (i = 100; i <= 200; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log("LoopyLighthouse")
  }
  else if (i % 3 === 0){
    console.log("Loopy")
  }
    else if (i % 4 === 0){
      console.log("Lighthouse")
    }
    else {
      console.log(i)
    }
}
}