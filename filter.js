//the filter() method
//iterates over an array of items and filters the array to only a specified set of results
// filters out unwanted results - returns array
// EXAMPLE

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = nums.filter(n => n % 2 === 0);
let odds = nums.filter(n => n % 2 !== 0);
console.log(evens);
console.log(odds);

let names = ['mike', 'jill', 'matt', 'jenny'];
let mNames = names.filter(name => name.charAt(0) === 'm');

console.log(mNames); 
