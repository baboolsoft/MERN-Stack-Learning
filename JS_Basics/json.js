// JSON
const person = {
  name: "Surya",
  age: 24,
  city: "Sivakasi"
};

// Convert object to JSON string
const jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);

// Convert JSON string back to object
const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);



// Convert this object into JSON and back
const book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: 1988
};
const bookJSON = JSON.stringify(book);
console.log("Book JSON:", bookJSON);
const bookObj = JSON.parse(bookJSON);
console.log("Book Object:", bookObj);

