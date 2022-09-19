One way to think of a multi-dimensional array, is as an array of arrays



const arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14] ];

arr[3];  // is [[10, 11, 12], 13, 14] 
arr[3][0]; // is [10, 11, 12]
arr[3][0][1]; is 11,


  
Exam:


Using bracket notation select an element from myArray such that myData is equal to 8.



const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];


