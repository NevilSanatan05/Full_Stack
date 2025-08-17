// const user = {
//   name: "Nevil",
//   age: 25,
// }
// const jsonstr = JSON.stringify(user);
// console.log(jsonstr);

// const obj = JSON.parse(jsonstr);
// console.log(obj);


// Simple GET request
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())  // convert JSON to JS object
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));

