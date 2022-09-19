// Array Example 
let cities = ["Karachi","Islamabad","Rawalpindi","Lahore"];
for (city of cities){
    document.getElementById("root").innerHTML +=  city + "<br/>" 
}


// String Example 
let country = "Pakistan";
for (place of country){
    document.getElementById("root").innerHTML +=  place + " " 
}



// Number Example 
let total = [1,2,3,4,5];
var sum = 0;
for (let majorTotal of total){

    sum += Number(majorTotal)
    document.getElementById("root").innerHTML =  sum
}
