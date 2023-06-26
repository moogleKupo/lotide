/*
const raisinAlarm = function(cookie) {
for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      return "Raisin alert!";
      } 
    } 
    return "All Good";
  }

//test
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
*/

const raisinAlarmArray = function(cookies){
  let newArray = [];
  let raisinAlert = "";
for (let i = 0; i < cookies.length; i++) {
  let innerArray = cookies[i];
    for(let j = 0; j < innerArray.length; j++) {
      if (innerArray[j] === "🍇") {
        newArray.push("Raisin alert!")
        raisinAlert = "yes";
        } 
      }
    } 
      if (raisinAlert !== "yes") {
          newArray.push("All Good");
      } 
      return newArray;
};

//test

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);