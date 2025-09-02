// Basic Loops


// For loop
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i)
}

// While loop
let count = 1
while (count <= 3) {
  console.log("Count:", count)
  count++
}

// Do While loop
let x = 1
do {
  console.log("x is:", x)
  x++
} while (x <= 2)


// Print even numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("Even:", i)
  }
}

// Sum of first N numbers
let n = 5
let sum = 0
for (let i = 1; i <= n; i++) {
  sum += i
}
console.log("Sum of first", n, "numbers is:", sum)

// Multiplication Table
let num = 7
for (let i = 1; i <= 10; i++) {
  console.log(num, "x", i, "=", num * i)
}
