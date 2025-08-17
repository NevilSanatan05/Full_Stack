const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your age: ", (age) => {
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }
  rl.close();
});
