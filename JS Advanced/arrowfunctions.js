// Arrow function
const addArrow = (a, b) => {
  return a + b;
};
console.log("Arrow Function:", addArrow(2, 3));

// Single line arrow function 
const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(3, 4));

// Single parameter - parentheses optional
const square = n => n * n;
console.log("Square:", square(5));

// No parameters - must use ()
const greet = () => "Hello, Surya";
console.log(greet());

// Arrow functions with default parameters
const greetUser = (name = "Guest") => `Welcome, ${name}!`;
console.log(greetUser("Ram"));
console.log(greetUser());

// Arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

const evens = numbers.filter(n => n % 2 === 0);
console.log("Even Numbers:", evens);

const firstEven = numbers.find(n => n % 2 === 0);
console.log("First Even:", firstEven);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

// Arrow function with object return 
const makeUser = (name, age) => ({ name, age });
console.log("User Object:", makeUser("Surya", 25));

// Arrow function and 'this'
const person = {
  name: "Coolman",
  arrowFn: () => {
    console.log("Arrow Function this.name:", this.name);
  }
};
person.arrowFn();

// rrow function that takes an array of numbers
// and returns a new array with only squared even numbers.
const squaredEvens = arr => arr.filter(n => n % 2 === 0).map(n => n * n);
console.log("Squared Evens:", squaredEvens([1, 2, 3, 4, 5, 6]));

// arrow function to count vowels in a string.
const countVowels = str => {
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(ch => vowels.includes(ch)).length;
};
console.log("Vowel Count in 'MERN Stack':", countVowels("MERN Stack Developer"));

// arrow function that takes an array of objects
// and returns names of users above age 18.
const users = [
  { name: "John", age: 16 },
  { name: "Ram", age: 22 },
  { name: "Sita", age: 19 }
];
const adults = arr => arr.filter(user => user.age > 18).map(user => user.name);
console.log("Adult Users:", adults(users));
