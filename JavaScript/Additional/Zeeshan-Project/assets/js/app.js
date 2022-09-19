const form = document.getElementById("form")
const email = document.getElementById("exampleInputEmail1");
const password = document.getElementById("exampleInputPassword1");
const submit = document.getElementById("button");



// Function to show error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Function to show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}



form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (email.value === '') {
        showError(email, 'Email is required');
    } 
     else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }
})





// // Function to check if password and confirm password match
// function checkPasswordsMatch(input1, input2) {
//     if (input1.value !== input2.value) {
//         showError(input2, "Passwords don't match")
//     }
// }



