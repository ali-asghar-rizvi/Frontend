// Understand String Immutability


// Most Importand Interview part 
In JavaScript, String values are immutable, which means that they cannot be altered once created

let myStr = "Bob";
myStr[0] = "J";


cannot change the value of myStr to Job, because the contents of myStr cannot be altered. 
Note that this does not mean that myStr cannot be changed, 
just that the individual characters of a string literal cannot be changed. 



The only way to change myStr would be to assign it with a new string, like this:
let myStr = "Bob";
myStr = "Job";
