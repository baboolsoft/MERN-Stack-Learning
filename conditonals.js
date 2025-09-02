// Else if
let age = 20

if (age < 18) {
  console.log("You are a minor")
} else if (age >= 18 && age < 60) {
  console.log("You are an adult")
} else {
  console.log("You are a senior citizen")
}

//Grades
let score = 85

if (score >= 90) {
  console.log("Grade: A")
} else if (score >= 75) {
  console.log("Grade: B")
} else if (score >= 50) {
  console.log("Grade: C")
} else {
  console.log("Grade: Fail")
}

//ATM Withdrawal
let balance = 2000
let withdraw = 1500

if (withdraw <= balance) {
  balance -= withdraw
  console.log("Withdrawal Successful. Remaining Balance:", balance)
} else {
  console.log("Insufficient Balance")
}

//Login System
let username = "admin"
let password = "1234"

if (username === "admin" && password === "1234") {
  console.log("Login Successful")
} else if (username === "admin") {
  console.log("Incorrect Password")
} else {
  console.log("User not found")
}
