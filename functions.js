//  Functions
// Declaration
function greet(name) {
  console.log("Hello, " + name + "!")
}

// Function with return value
function add(a, b) {
  return a + b
}

let result = add(5, 7)
console.log("Sum is:", result)


// check if a number is even or odd
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even"
  } else {
    return "Odd"
  }
}

console.log("10 is:", checkEvenOdd(10))
console.log("15 is:", checkEvenOdd(15))

// find the factorial of a number
function factorial(n) {
  let fact = 1
  for (let i = 1; i <= n; i++) {
    fact *= i
  }
  return fact
}

console.log("Factorial of 5 is:", factorial(5))
