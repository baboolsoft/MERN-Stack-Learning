// Class
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  drive() {
    return `${this.brand} ${this.model} is driving 🚗`;
  }
}

// Object creation using 'new'
let car1 = new Car("Toyota", "Corolla");
let car2 = new Car("Tesla", "Model 3");

console.log(car1.drive());
console.log(car2.drive());

// Inheritance ('extends', 'super')
class ElectricCar extends Car {
  constructor(brand, model, battery) {
    super(brand, model); 
    this.battery = battery;
  }

  charge() {
    return `${this.brand} ${this.model} is charging 🔋 (Battery: ${this.battery}%)`;
  }
}

let tesla = new ElectricCar("Tesla", "Model S", 80);
console.log(tesla.drive());
console.log(tesla.charge());

// Encapsulation with getters/setters
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance; 
  }

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    if (amount < 0) {
      console.log("Balance cannot be negative!");
    } else {
      this._balance = amount;
    }
  }
}

let account = new BankAccount("Alice", 1000);
console.log(account.balance); 
account.balance = 2000; 
console.log(account.balance);
account.balance = -500; 
console.log(account.balance);


// Create a "Student" class with properties name, grade
// and a method introduce() -> "Hi, I'm NAME in grade GRADE"
class Student {
  constructor(name, dept) {
    this.name = name;
    this.dept = dept;
  }

  introduce() {
    return `Hi, I'm ${this.name} from Dept ${this.dept}`;
  }
}
let student1 = new Student("Surya", "CSE");
console.log(student1.introduce());

// Create a "Rectangle" class with width, height
// Method: area() → return area of rectangle
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}
let rect = new Rectangle(5, 10);
console.log("Rectangle area:", rect.area());

// Create a "Person" class with age
// Use getter and setter for validation (age > 0)
class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value > 0) {
      this._age = value;
    } else {
      console.log("Invalid age!");
    }
  }
}

let person = new Person("Surya", 25);
console.log(`${person.name} is ${person.age} years old`);
person.age = -3; 
person.age = 30; 
console.log(`${person.name} is now ${person.age} years old`);
