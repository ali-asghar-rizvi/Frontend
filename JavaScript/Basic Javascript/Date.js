
// Theory 

// getFullYear() – You will use this method to get the year as a four-digit number (yyyy). For example, 2022.

// getMonth() – You will use this method to get the month as a number between 0-11, with each number representing the months 
// from January to December. For example, 2 will be the index for March since it's zero-based indexing (meaning it starts from 0).

// getDate() – You will use this method to get the day as a number between 1-31 (this is not an index, but the exact day value, 
// so it starts from 1 not 0).


// Note: These methods can only be applied or will only work with the new Date() constructor, which returns a date object.
















// Get Today Date 

let objectDate = new Date();


let day = objectDate.getDate();
console.log(day); // 23

let month = objectDate.getMonth();
console.log(month + 1); // 8

let year = objectDate.getFullYear();
console.log(year); // 2022











// Format s

let format1 = month + "/" + day + "/" + year;
console.log(format1); // 7/23/2022

let format2 = day + "/" + month + "/" + year;
console.log(format2); // 23/7/2022

let format3 = month + "-" + day + "-" + year;
console.log(format3); // 7-23-2022

let format4 = day + "-" + month + "-" + year;
console.log(format4); // 23-7-2022
