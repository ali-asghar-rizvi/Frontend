Hoisting
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.



Hosting of Var
var variables are hoisted to the top of their scope and initialized with a value of undefined.



Hoisting of let 
the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.

Hoisting of const
Just like let, const declarations are hoisted to the top but are not initialized.



var declarations are globally scoped or function scoped while let and const are block scoped.
var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
While var and let can be declared without being initialized, const must be initialized during declaration.
