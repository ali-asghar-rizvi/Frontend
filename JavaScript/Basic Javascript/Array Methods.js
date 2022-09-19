// join 

The join() method returns an array as a string.
The join() method does not change the original array.
Any separator can be specified. The default is comma (,).

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and ");


// indexOf()

indexOf() returns the position of a specified value in an array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");


// concat

The concat() method concatenates (joins) two or more arrays.
The concat() method returns a new array, containing the joined arrays.
The concat() method does not change the existing arrays.


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];

Join Two Array
const children = arr1.concat(arr2); 

Join Three Array
const children = arr1.concat(arr2, arr3);



// push()
Manipulate Arrays With push()

.push() is used to Add the last item from Array

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log(arr2);


// pop()
Manipulate Arrays With pop()

.pop() is used to remove the last item from Array

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(threeArr);





// shift()
Manipulate Arrays With shift()

.shift() function to remove the first item from Array
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();







// unshift()

Add to the beginning of the Array using unshift().

const ourArray = ["Stimpson", "J", "cat"];
ourArray.unshift("Happy");
console.log(ourArray);






// splice
// The splice() method adds and / or removes array elements.
// The splice() method overwrites the original array.

// At position 2, add 2 elements:

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

// At position 2, remove 2 items:

const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2);



// slice

// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a(not inclusive) given end
// The slice() method does not change the original array.

const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits3.slice(1, 3);

// Note: start from 1 index stop before 3 index 
// output
Orange, Lemon







// sort
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.sort();  // sort Arrange alphabethiclly and number wise




// reverse
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.reverse(); // sort Arrange reverse alphabethiclly and reverse number wise