function User(name, age, education) {
  this.name = name;
  this.age = age;
  this.education = education;
  this.greetings = function() {
    console.log(`Assalam-o-alaikum! How're you, ${this.name}`);
  }
  return this
}

const userOne = User("Muhammad Fuaad", 28, "Graduation")
const userTwo = User("Muhammad Ahmed", 38, "PhD")
const userThree = new User("Muhammad Abdullah", 38, "PhD")


console.log("userOne:", userOne);
console.log("userTwo:", userTwo);
console.log("userThree:", userThree);

console.log("userTwo.greetings:", userTwo.greetings());



// Notes:
// "new" keyword gives us a new copy whcih doesn't change the other objects on editing the data inside.
// Steps invoked when "new" keyword is called:
// 1) When "new" keyword is called, it creates an empty object, called instance.
// 2) Constructor funtion is called which packs all the arguments.
// 3) These arguments are injectd into "this" keyword.
// 4) All this data becomes accessible.