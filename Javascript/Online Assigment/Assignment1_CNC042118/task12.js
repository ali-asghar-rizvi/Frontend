// Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to
// convert the total currency to Pakistani Rupees. Perform all
// calculations in a single expression. (Exchange rates : 1 US Dollar =
// 155 Pakistani Rupee and 1 Saudi Riyal = 41 Pakistani Rupee)

var oneDollar = 155;
var oneRiyal = 41;
var weHaveDollar = 10;
var weHaveRiyals = 25;
var totalAmountInPkr = (oneDollar * weHaveDollar) + (oneRiyal * weHaveRiyals);

document.write("<h1>Currency in PKR</h1> <br>" +
 "<p>Total Currency in PKR: " + totalAmountInPkr  + "</p>");