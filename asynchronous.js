// setTimeout & setInterval

console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

let counter = 0;
let intervalId = setInterval(() => {
  counter++;
  console.log("Interval count:", counter);
  if (counter === 3) clearInterval(intervalId);
}, 1000);

console.log("End");

// Callbacks

function fetchDataCallback(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    callback("Data received via Callback!");
  }, 1500);
}

fetchDataCallback((data) => {
  console.log(data);
});

// Promises

function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; 
      if (success) resolve("Data received via Promise!");
      else reject("Error fetching data!");
    }, 1500);
  });
}

fetchDataPromise()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Async / Await

async function fetchDataAsync() {
  try {
    console.log("Fetching data from...");
    let data = await fetchDataPromise();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchDataAsync();


// waits for 3 seconds using setTimeout
function sayHelloAsync() {
  setTimeout(() => {
    console.log("Hello, Async!");
  }, 3000);
}
sayHelloAsync();

// returns a Promise after 2 seconds.
function taskCompleted() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task Completed!");
    }, 2000);
  });
}

taskCompleted().then((msg) => console.log(msg));

// async/await to call
async function runTask() {
  let result = await taskCompleted();
  console.log("Async Result:", result);
}
runTask();
