// Arrays

let fruits = ["Apple", "Banana", "Mango"]

console.log("First fruit:", fruits[0])  // Apple
console.log("Total fruits:", fruits.length) // 3

// Add
fruits.push("Orange")
console.log("After push:", fruits)

// Remove
fruits.pop()
console.log("After pop:", fruits)

// Iterating loop
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i])
}

// sum of numbers
function sumArray(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

let numbers = [10, 20, 30, 40]
console.log("Sum of numbers:", sumArray(numbers))


// Reverse an array without reverse()
function reverseArray(arr) {
  let reversed = []
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i])
  }
  return reversed
}
let nodes = [15, 120, 60, 85]
console.log("Reversed array:", reverseArray(nodes))


// Find the largest number
function findMax(arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}
let arrnumber = [43, 26, 88, 98]
console.log("Largest number:", findMax(arrnumber))
