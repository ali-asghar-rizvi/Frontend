//Use Bracket Notation to Find the First Character in a String


Bracket notation is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, 
don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.

For example, the character at index 0 in the word Charles is C. 
So if const firstName = "Charles", you can get the value of the first letter of the string by using firstName[0]


const firstName = "Charles";
console.log(firstName[0]);





// Use Bracket Notation to Find the Nth Character in a String

You can also use bracket notation to get the character at other positions within a string.
Remember that computers start counting at 0, so the first character is actually the zeroth character.

const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];



// Use Bracket Notation to Find the Last Character in a String

In order to get the last letter of a string, you can subtract one from the string's length.
For example, if 


const firstName = "Ada"
firstName[firstName.length - 1]






// Use Bracket Notation to Find the Nth-to-Last Character in a String

You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.
For example, you can get the value of the third-to-last letter of the 
const firstName = "Augusta" string by using firstName[firstName.length - 3]





















