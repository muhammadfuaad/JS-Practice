// Example of a callback function
function greet(name, callback) {
  console.log('Assalam-o-alaikum wrwb, ' + name + '!');
  // Invoke the callback function
  callback();
}

// Callback function definition
function sayGoodbye() {
  console.log('Assalam-o-alaikum wrwb!');
}

// Using the greet function with the sayGoodbye callback
greet('John', sayGoodbye);
