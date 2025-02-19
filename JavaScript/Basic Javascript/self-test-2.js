// One 
1. Create an array to use as your shopping list with 3 items: "Milk,"Bread", and "Apples."
2. Check your list length in the console.
3. Update "Bread" to "Bananas."
4. Output your entire list to the console.



// Two 
1. Create an empty array to use as a shopping list.
2. Add Milk, Bread, and Apples to your list.
3. Update " Bread " with Bananas and Eggs.
4. Remove the last item from the array and output it into the console.
5. Sort the list alphabetically.
6. Find and output the index value of Milk.
7. After Bananas, add Carrots and Lettuce.
8. Create a new list containing Juice and Pop.
9. Combine both lists, adding the new list twice to the end of the first list.
10. Get the last index value of Pop and output it to the console.
11. Your final list should look like this:



// three 
1. Create an array containing three values: 1, 2, and 3.
2. Nest the original array into a new array three times.
3. Output the value 2 from one of the arrays into the console


// four 
1. Create a new myCar object for a car.Add some properties, including,
   but not limited to, make and model, and values for a typical car or
   your car.Feel free to use booleans, strings, or numbers.
2. Create a variable that can hold the string value color.This variable
   containing a string value color can now be used to reference the
   property name within myCar.Then, use the variable within the square
   bracket notation to assign a new value to the color property in myCar.
3. Use that same variable and assign a new property string value to it,
   such as forSale.Use the bracket notation once again to assign a new
   value to the forSale property to indicate whether the car is available for purchase.
4. Output make and model into the console.
5. Output the value of forSale into the console.


// five 
1. Create an object named people that contains an empty array that is called friends.
2. Create three variables, each containing an object, that contain one of your friend's 
   first names, last names, and an ID value.
3. Add the three friends to the friend array.
4. Output it to the console




// --------------------------------------
// -----------   Answer All  ------------
// --------------------------------------

1. Can you use const and update values within an array?

2. Which property in an array gives the number of items contained in the array ?

3. What is the output in the console ?
    const myArr1 = [1, 3, 5, 6, 8, 9, 15];
    console.log(myArr1.indexOf(0));
    console.log(myArr1.indexOf(3));
4. How do you replace the second element in an array myArr =
    [1, 3, 5, 6, 8, 9, 15] with the value 4 ?

5. What is the output in the console ?
    const myArr2 = [];
    myArr2[10] = 'test'
    console.log(myArr2);
    console.log(myArr2[2]);

6. What is the output in the console ?
    const myArr3 = [3, 6, 8, 9, 3, 55, 553, 434];
    myArr3.sort();
    myArr3.length = 0;
    console.log(myArr3[0])




// Projects  || Manipulating an array

Take the following array:
const theList = ['Laurence', 'Svekis', true, 35, null, undefined]
Manipulate your array using various methods, such as pop(), push(),
    shift(), and unshift(), and transform it into the following:
["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
You can take the following steps, or adopt your own approach:
Remove the first item and the last item.
Add FIRST to the start of the array.
Assign hello World to the fourth item value.
Assign MIDDLE to the third index value.
Add LAST to the last position in the array.
Output it to the console.




// Projects  || Company product catalog

In this project, you will implement a data structure for a product catalog and
create queries to retrieve data.
1. Create an array to hold an inventory of store items.
const theList = ['Laurence', 'Svekis', true, 35, null, undefined]