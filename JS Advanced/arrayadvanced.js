// array
const numbers = [1, 2, 3, 4, 5, 6];

console.log("forEach Example:");
numbers.forEach((num, index) => {
  console.log(`Index: ${index}, Value: ${num}`);
});

// map()

// Creates a new array by transforming each element
console.log("\nmap Example:");
const squares = numbers.map(num => num * num);
console.log("Squares:", squares);

// filter()

// Returns only elements that pass the condition
console.log("\nfilter Example:");
const evens = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evens);

// find()

// Finds the first element matching condition
console.log("\nfind Example:");
const firstGreaterThanThree = numbers.find(num => num > 3);
console.log("First > 3:", firstGreaterThanThree);

// reduce()

// Reduces array to a single value
console.log("\nreduce Example:");
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);

// some() and every()

console.log("\nsome & every Example:");
console.log("Some > 5:", numbers.some(num => num > 5)); 
console.log("Every > 0:", numbers.every(num => num > 0)); 

// includes()

console.log("\nincludes Example:");
console.log("Includes 4?", numbers.includes(4));
console.log("Includes 10?", numbers.includes(10));

// Double only odd numbers
const oddDoubles = numbers
  .filter(num => num % 2 !== 0)
  .map(num => num * 2);         
console.log("\nDouble Odd Numbers ->", oddDoubles);

// all numbers are less than 10
const allLessThanTen = numbers.every(num => num < 10);
console.log("All numbers < 10? ->", allLessThanTen);
