// Write a node program that takes in an unlimited number of command line
// arguments, goes through each and prints out the sum of them.
// If any argument is not a whole number, skip it.
// Do support negative numbers though.

var arguments = process.argv
var numbers = arguments.slice(2);
console.log(numbers);

// console.log

// Array of presumed numbers and returns a sum of the numbers as a number
function sumNumbers(nums) {
  console.log('In SplitArray. nums: ', nums);
  var sum = 0;
  for(var i = 0; i < nums.length; i++) {
    var num = Number(nums[i]);
    // FIXME: Don't assume number, but for now happy path only
    sum += num;
    debugger; // breakpoint
  }
  return sum;
}

var output = sumNumbers(numbers);
console.log('The End: ', output);



