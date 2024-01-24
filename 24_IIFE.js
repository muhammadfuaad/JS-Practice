(function greetings(name) {
  console.log(`Assalam-o-alaikum! How're you ${name}`);
}) ("Muhammad Fuaad")

((name) => {
  console.log(`Assalam-o-alaikum! How're you ${name}`);
})("Muhammad Fuaad");

// Questions:
// Why does the second expression shows error?
// How does IIFE prevents the pollution of global namespace?