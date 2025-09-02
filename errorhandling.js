
// Basic try...catch
try {
  let num = 10 / 0;
  console.log("Result:", num);
  throw new Error("Custom error!");
} catch (err) {
  console.log("Caught an error:", err.message);
} finally {
  console.log("Finally block runs!");
}


// Handle JSON parsing error
function parseJSON(str) {
  try {
    let data = JSON.parse(str);
    console.log("Parsed data:", data);
  } catch (err) {
    console.log("Invalid JSON:", err.message);
  } finally {
    console.log("Parsing attempt finished.\n");
  }
}

parseJSON('{"name": "Alice", "age": 25}');


// Divide function with error handling
function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero not allowed!");
    }
    console.log(`Result of ${a} / ${b} =`, a / b);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

safeDivide(10, 2);
safeDivide(5, 0);

// Validate user age
function checkAge(age) {
  try {
    if (typeof age !== "number") {
      throw new Error("Age must be a number!");
    }
    if (age < 18) {
      throw new Error("You must be at least 18!");
    }
    console.log("Age is valid:", age);
  } catch (err) {
    console.log("Validation error:", err.message);
  }
}

checkAge(20);
checkAge(15);
checkAge("twenty");
