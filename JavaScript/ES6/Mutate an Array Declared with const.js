const s = [5, 6, 7];
s = [1, 2, 3];  // it cannot change because variable created with const
s[2] = 45;  // you can mutate the 2 index value  the array elements in s are mutable,
console.log(s); 
