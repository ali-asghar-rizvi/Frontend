// Write a program that take time as input from user in 24 hours clock
// format like: 1900 = 7pm. Implement the following case using if, else &
// else if statements

var time = prompt("Enter time in 1900 = 7pm Format");

if (time >= 0000 && time < 1200){
    alert("Good Morning....!!!")
}

else if (time >= 1200 && time < 1700){
    alert("Good Afternoon....!!!")
}

else if (time >= 1700 && time < 2100){
    alert("Evening....!!!")
}
else if (time >= 2100 && time < 2359){
    alert("Good Night....!!!")
}