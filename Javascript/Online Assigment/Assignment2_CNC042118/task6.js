// Write a program that checks whether the given input is an even
// number or an odd number.

var givenNumber = Number(prompt("Enter Number to Check Even or Odd"));

if(givenNumber % 2 == 0) {
    document.write("<h1>Even Number.......!!</h1>");
 } 
else {
    document.write("<h1>Odd Number.......!!</h1>");
 }

//Sir Zeeshan Code 
//Prime Number Example

var givenNumber = parseInt(prompt("Enter Number to check prime number"));
var isPrime = true;
for (var i=2 , i < givenNumber, i++){
    var result = givenNumber % 2;
    if (result == 0){
        console.log("Number is not prime");
        isPrime = false;
        break;
    }
}
if (isPrime){
    console.log("Number is Prime");
}
