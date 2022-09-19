// Promise .then .catch code Example 

const myPromise = new Promise(function(resolve, reject) {
  let a = 2 + 3;
  if (a == 5)
    resolve("success");
  else
    reject("failure");
  }
);



myPromise.then(function(message){
  document.getElementById("root").innerHTML = message;
}).catch(function(message){
  document.getElementById("root").innerHTML = message;
});


// .then run successful condition
// if condition is failed so .catch code will be executed
