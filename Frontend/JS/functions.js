function greet(name){
  console.log('Hello, ' + name + '!');
  
}
greet("Nevil");


function farewell(name){
  return 'Goodbye, ' + name + '!';
}
console.log(farewell("Nevil"));

const  greetAndFarewell = (name) => {
  console.log('Hello, ' + name + '!');
};
greetAndFarewell("Nevil");