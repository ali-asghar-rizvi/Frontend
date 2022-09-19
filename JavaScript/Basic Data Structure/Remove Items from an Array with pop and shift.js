function popShift(arr) {
    let popped = arr.pop(); 
    let shifted = arr.shift();
    return [shifted, popped];
}

console.log(popShift(['1', '2', '3', '4']));