One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations:


In a small application, you might not run into this type of problem. 
But as your codebase becomes larger, you might accidentally overwrite a variable that you did not intend to. 
Because this behavior does not throw an error, searching for and fixing bugs becomes more difficult

Example: 
  var camper = "James";
  var camper = "David";
  console.log(camper);

it overwrite variable camper value with new value David  



A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword.
when you use let, a variable with the same name can only be declared once.


Example: 
  let camper = "James";
  let camper = "David";
  console.log(camper);

it will generate Error
Uncaught SyntaxError: Identifier 'camper' has already been declared



// var 
1) var declarations are globally scoped or function scoped.
// Let 
2) let is block scoped
let can be updated but not re-declared.

//const 
3) const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. 
They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:

const camper = "James";
the value of camper cannot updated or re-declared remain constant 






