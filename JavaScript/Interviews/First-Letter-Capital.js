// Capitalize the first letter of each word in a string
// To achieve this, we split the words from the string and store them in an array,
//  and then use the above concept on each element of the array and join all the array elements 
// together to get the string back.Let us take a look at this using an example

const str = 'i have learned something new today';

//split the above string into an array of strings 
//whenever a blank space is encountered

const arr = str.split(" ");

//loop through each element of the array and capitalize the first letter.


for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = arr.join(" ");
console.log(str2);

//Outptut: I Have Learned Something New Today