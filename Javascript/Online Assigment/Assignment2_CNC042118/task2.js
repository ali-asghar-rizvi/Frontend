// Write a program to take input color of road traffic signal from the user
// & show the message according to this table:

var color = prompt("Enter Traffic Signal Color" + "\nNote:  First Word Capital");

if (color === "Red"){
    document.write("<b>Signal Color : </b>" + color + " " +"</br></br></br>")
    document.write("<b>Must Stop<b>")
}
else if (color === "Yellow"){
    document.write("<b>Signal Color : </b>" + color + " " +"</br></br></br>")
    document.write("<b>Ready to Move<b>")
}
else if (color === "Green"){
    document.write("<b>Signal Color : </b>" + color + " " +"</br></br></br>")
    document.write("<b>Move Now<b>")
}