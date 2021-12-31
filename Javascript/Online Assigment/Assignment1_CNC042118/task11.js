// Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “N
// oC is N
// oF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “N
// oF is N
// // oC”.


var Cel_Value =  25;
var Fehr_Value = 70;
var tempInCel  = ((Fehr_Value -32) * 5/9);
var tempInFehr = ((Cel_Value * 9/5) + 32);

document.write( Cel_Value + "<sup>o</sup>C is " + tempInFehr +"<sup>o</sup>F <br>"   
              + Fehr_Value + "<sup>o</sup>F is " + tempInCel +"<sup>o</sup>C");  