const userFirstName = document.getElementById("fname");
const userLastName = document.getElementById("lname");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const userConfirmPassword = document.getElementById("confirmPassword");




const accountCreated  = ()  => {

    const userData = {
        userFirstName: userFirstName.value,
        userLastName: userLastName.value,
        userEmail: userEmail.value,
        userPassword: userPassword.value,
        userConfirmPassword: userConfirmPassword.value,
    }

    localStorage.setItem("userAccount", JSON.stringify(userData))
    alert("Account Successfully Created !");
    window.location.assign("index.html")
}



const userLoginCheck = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    let userDetail = JSON.parse(localStorage.getItem("userAccount"));
    if (email.value === userDetail.userEmail && password.value === userDetail.userPassword)
    {
        alert("Account Successfully Login");
    }

    else{
        alert("Invalid USer");
    }
}