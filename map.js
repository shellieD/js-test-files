// The map() operator
// Executes a function on all elements in an array and 
// returns a new array containing all results of a callback function
// A callback function is a function you want to execute on every element in the array
//EXAMPLE

let nums = [1, 2, 3, 4, 5, 6];
const results = nums.map(num => num * 2);

console.log(results);