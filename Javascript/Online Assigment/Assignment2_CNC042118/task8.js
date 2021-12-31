// Write a program that takes input a number from user & state whether
// the number is positive, negative or zero.

var giveNumber = Number(prompt("Enter Number"));

if (giveNumber > 0){
    document.write("<h1>Number is Positive</h1>")
}

else if (giveNumber < 0){
    document.write("<h1>Number is Negative</h1>")
}

else if (giveNumber == 0){
    document.write("<h1>Number is Zero</h1>")
}