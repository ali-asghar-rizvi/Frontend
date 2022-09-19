// Paramenter
function Sum (a,b){
    return a+b;
}
document.getElementById("root").innerHTML = Sum (2,2);




// default Paramenter
function Sum (a,b = 3){
    return a+b;
}
document.getElementById("root").innerHTML = Sum (2);


// Rest Paramenter
Sum = (...numbers) => {
    var total = 0
    for (number of numbers) {
        total += number
    }
    return total
}
document.getElementById("root").innerHTML = Sum(2, 3, 3, 4, 5, 6, 7);


// Rest Paramenter part 2
Sum = (a, b ,...numbers) => {
    var total = a+b;
    for (number of numbers) {
        total += number
    }
    return total
}
document.getElementById("root").innerHTML = Sum( 1, 1, 1, 1, 1);
