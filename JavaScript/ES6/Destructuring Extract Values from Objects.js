// Use Destructuring Assignment to Extract Values from Objects
var o = { p: 42, q: true };
var { p, q } = o;

console.log(p); // 42
console.log(q); // true






// In ES5, we had to use below approach.
var o = { p: 42, q: true };
var p = o.p;
var q = o.q;
console.log(p); // 42
console.log(q); // true


// Another Example 
const user = { name: 'John Doe', age: 34 };
const { name, age } = user;


// in ES5 we use


// const name = user.name;
// const age = user.age;