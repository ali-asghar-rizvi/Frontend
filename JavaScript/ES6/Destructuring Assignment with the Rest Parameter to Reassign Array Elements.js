const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);

// Variables a and b take the first and second values from the array.After that,
// because of the rest parameter's presence, arr gets the rest of the values in the form of an array. 