// Basic
let a = 10
let b = 3
console.log("Addition:", a + b)
console.log("Subtraction:", a - b)
console.log("Multiplication:", a * b)
console.log("Division:", a / b)
console.log("Modulus:", a % b)
console.log("Exponent:", a ** b)
console.log("Increment:", ++a)
console.log("Decrement:", --b)
console.log("Comparison:", a > b)
console.log("Logical AND:", (a > 5 && b > 1))
console.log("Logical OR:", (a > 15 || b > 1))
console.log("Logical NOT:", !(a > b))

//Shopping Cart
let item1 = 500
let item2 = 1200
let total = item1 + item2
let discount = total > 1000 ? 200 : 0
let finalAmount = total - discount
console.log("Total:", total, "| Discount:", discount, "| Final:", finalAmount)

//Exam
let marks = 75
let passMarks = 40
let maxMarks = 100
let percentage = (marks / maxMarks) * 100
let status = marks >= passMarks ? "Pass" : "Fail"
console.log("Marks:", marks, "| Percentage:", percentage, "% | Status:", status)

//Check Age
let age = 18
let hasID = true
let eligible = (age >= 18 && hasID) ? "Allowed" : "Not Allowed"
console.log("Entry Status:", eligible)
