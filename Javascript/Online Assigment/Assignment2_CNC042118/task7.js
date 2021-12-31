//Take the following input:
// a. First number // b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var a = Number(prompt("Enter First Number"));
var b = Number(prompt("Enter Second Number"));
var c = prompt("Enter Sign");

if (c == "+") {
    document.write( "Result :"+   (a+b))
}
else if (c == "-") {
    document.write( "Result :"+  (a-b))
}
else if (c == "*") {
    document.write( "Result :"+  (a*b))
}
else if (c == "/") {
    document.write( "Result :"+  (a/b))
}

else if (c == "%") {
    document.write( "Result :"+  (a%b))
}
else {
    alert("Wrong Input")
}
