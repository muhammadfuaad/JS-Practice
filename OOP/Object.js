const userData = {
  firstName: "Muhammad",
  lastName: "Fuaad",
  // fullName: `${this.firstName} + ${this.lastName}`,
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  age: 28,
  education: "Graduation",
  introduceYourself: function() {
    console.log(`Assalam-o-alaikum wrwb! My name is ${this.fullName} and my age is ${this.age}. I'm the future billionaire 
    of IT Industry, inshaAllah.`)
    console.log("introduceYourself's this:", this);
    console.log("userData's this:", this);
  }
}

console.log("outside's this:", this);
console.log(userData.introduceYourself());

// Questions:
// Why "outside's this" is printed at the top of all in the console?
// Does all this have same reference?