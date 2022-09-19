When JavaScript variables are declared, they have an initial value of undefined. 

var a;   // so a is undefined 

If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". 
a = a + 1;


If you concatenate a string with an undefined variable, you will get a string of undefined.
c = c + " String!";
