// Store a secret number (ranging from 1 to 10) in a variable. Prompt
// user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show “Close
// enough to the correct answer”.


var guessNumber = Number(prompt("Guess The Secret Number"));

if (guessNumber <= 10){
    document.write("<h1>“Bingo! Correct Answer”</h1>")
}

else if (guessNumber == 11){
    document.write("<h1>“Close enough to the correct answer”</h1>") 
}

else {
    document.write("Wrong Guess Try Again .....!!!")
}


