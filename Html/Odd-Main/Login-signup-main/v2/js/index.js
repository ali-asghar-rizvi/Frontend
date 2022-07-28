const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");




const creatingAccount = () => {


    const userObj = {
        username: username.value,
        email: email.value,
        password: password.value,
    }

    const user = JSON.parse(localStorage.getItem("users")) || []
    console.log(user)

    const userIndex = user.findIndex((value, ind) => {
        return value.email === userObj.email
    })
    console.log(userIndex);
    if (userIndex === -1) {
        user.push(userObj)
        localStorage.setItem("users", JSON.stringify(user))
        alert("successfully signup")
        window.location.assign("./login.html")

    } else {
        alert("email already exists")
    }

}


const loginCheck = () => {
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const userData = JSON.parse(localStorage.getItem("users"))
    console.log(userData)
    const checkUser = userData.find((value) => {
        return value.email === email.value && value.password === password.value
    })

    console.log(checkUser);
    if (checkUser) {
        localStorage.setItem("currentUser", JSON.stringify(checkUser))
        alert(" \nSuccessFully Login")
    } else {
        alert(" \nInvalid Credentail")
    }

}




















// formCheck = () => {
//     const checkName = username.value; 
//     const checkEmail = email.value
//     const checkPassword = password.value
//     const checkConfirmPassword = confirmPassword.value

//     if ( checkName == "") {
//         alert("Name can't be blank");
//         return false;
//     } 
//     else if ( checkEmail == "") {
//         alert("Email can't be blank");
//         return false;
//     } 

//     else if (checkPassword === checkConfirmPassword) {
//         alert("Password Must be Same");
//         return false;
//     }
// }
// submitForm.onclick( () => {
//      formCheck()
// })
