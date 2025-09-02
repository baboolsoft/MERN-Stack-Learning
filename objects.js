// Object 
let person = {
  name: "Alice",
  age: 25,
  isStudent: true,

  greet: function () {
    return `Hello, my name is ${this.name}`;
  }
};

console.log(person.name);       
console.log(person["age"]);    
console.log(person.greet());    

// Assign Object
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022
};

console.log(car.brand);  
console.log(car.year);   


car.getDetails = function () {
  return `${this.brand} ${this.model} (${this.year})`;
};

console.log(car.getDetails()); 



// Nested Object
let student = {
  name: "John",
  marks: {
    math: 90,
    science: 85
  }
};

console.log(student.marks.science); 
