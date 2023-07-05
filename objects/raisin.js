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

/* const raisinAlarmArray = function(cookies){
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
*/
//test

/* const raisinAlarmArray = function(cookies) {
  let responseArray = [];
  for (let i = 0; i < cookies.length; i++) {
    let innerArray = cookies[i];
    let response = "All good!";
    for (let j = 0; j < innerArray.length; j++) {
      if (innerArray[j] === "🍇") {
        response = "Raisin alert!";
        break;
      }
    }
    responseArray.push(response);
  }
  return responseArray;
};

const raisinAlarmArray = function(cookies) {
  let newArray = [];
  for (let i = 0; i < cookies.length; i++){ //loop outer array
    let innerArray = cookies[i];
    let response = "All good!";
    for (let j = 0; j < innerArray.length; j++) { //loop inner array
      if (innerArray[j] === "🍇") { //if finds raisin
        response = "Raisin alert!";
        break; //push alert to new array
    }
  }
      newArray.push(response) //move to next index   if 
    //push all good  }
return newArray;
};
*/
const raisinAlarmArray = function (cookies) {
  let newArray = [];
  for (let i = 0; i < cookies.length; i++){ //loop outer array
    let innerArray = cookies[i];
    let response = "All good!"
      for (let j = 0; j < innerArray.length; j++) { //loop inner array
        if (innerArray[j] === "🍇") { //if finds raisin
        response = "Raisin alert!";
        break; //exit inner loop if raisin is found
      }
    }
      newArray.push(response) //move to next index   if 
    //push all good  }
  } return newArray;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);