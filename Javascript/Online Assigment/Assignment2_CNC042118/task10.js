// a. Store correct password in a JS variable.
// b. Asks the user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give the
// message “ Please enter your password”
// ii. Check if both passwords are the same. If they are the
// same, show message “Correct! The password you
// entered matches the original password”. Show “Incorrect
// password” otherwise.

var firstPassword = prompt("Enter Password");
var secondPassword = prompt("Re-Enter Password");

if (firstPassword === secondPassword){
    document.write(" “Correct! The password you entered matches the original password”")
}

else {
    document.write("“Incorrect password”")
}

