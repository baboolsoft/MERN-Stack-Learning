// DOM MANIPULATION BASICS
// Selecting Elements
let byId = document.getElementById("title"); // single element by id
let byClass = document.getElementsByClassName("item"); // HTMLCollection
let byTag = document.getElementsByTagName("p"); // HTMLCollection
let queryOne = document.querySelector(".item"); // first match
let queryAll = document.querySelectorAll(".item"); // NodeList

// Changing Content
byId.textContent = "New Title Text"; // changes text
byId.innerHTML = "<span style='color:red'>Inner HTML Updated</span>"; // adds html
byId.innerText = "Only visible text"; // ignores hidden content

// Changing Attributes
byId.setAttribute("class", "highlight");
byId.setAttribute("data-info", "extra");
let attrVal = byId.getAttribute("class");
byId.removeAttribute("data-info");

// Changing Styles
byId.style.color = "blue";
byId.style.backgroundColor = "yellow";
byId.style.fontSize = "24px";

// Working with Classes
byId.classList.add("big", "bold");
byId.classList.remove("bold");
byId.classList.toggle("hidden"); // adds if not present, removes if present
let hasClass = byId.classList.contains("big"); // true/false

// Creating and Appending Elements
let newDiv = document.createElement("div");
newDiv.textContent = "I am new here!";
document.body.appendChild(newDiv);

// Insert before another element
let list = document.getElementById("list");
let newItem = document.createElement("li");
newItem.textContent = "Inserted Item";
list.insertBefore(newItem, list.firstChild);

// Removing Elements
list.removeChild(list.lastElementChild); // removes last item
newDiv.remove(); // directly remove

// Traversing the DOM
let parent = byId.parentElement; // parent node
let children = list.children; // HTMLCollection
let firstChild = list.firstElementChild;
let lastChild = list.lastElementChild;
let next = byId.nextElementSibling;
let prev = byId.previousElementSibling;

// Forms & Inputs
let input = document.getElementById("myInput");
let inputValue = input.value; // get value
input.value = "Changed Value"; // set value

let checkbox = document.getElementById("myCheck");
let isChecked = checkbox.checked; // true/false

// Events + DOM Manipulation
let btn = document.getElementById("myBtn");

btn.addEventListener("click", function () {
  let newPara = document.createElement("p");
  newPara.textContent = "You clicked the button!";
  document.body.appendChild(newPara);
});

// Another example: input typing updates text
input.addEventListener("input", function (e) {
  byId.textContent = "Typing: " + e.target.value;
});

// Replacing Elements
let newHeading = document.createElement("h2");
newHeading.textContent = "I replaced the title!";
byId.replaceWith(newHeading);

// Clone Elements
let clonedItem = newHeading.cloneNode(true); // true -> deep clone
document.body.appendChild(clonedItem);

// InnerHeight / InnerWidth / Offset
console.log("Width:", byId.offsetWidth);
console.log("Height:", byId.offsetHeight);

// Scroll Related
console.log(window.scrollY);
window.scrollTo(0, 200); // scroll to 200px

// Toggle theme
let toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Add items dynamically
let addBtn = document.getElementById("addItem");
addBtn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = "New Dynamic Item";
  list.appendChild(li);
});

// Remove input content
let clearBtn = document.getElementById("clearInput");
clearBtn.addEventListener("click", function () {
  input.value = "";
  byId.textContent = "Input cleared!";
});
