// Write a node program that takes in an unlimited number of command line
// arguments, goes through each and prints out the sum of them.
// If any argument is not a whole number, skip it.
// Do support negative numbers though.

var arguments = process.argv
var numbers = arguments.slice(2);
console.log(numbers);

// console.log

