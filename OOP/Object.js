const userData = {
  name: "Muhammad Fuaad",
  age: 28,
  education: "Graduation",
  myMotivation: function() {
    console.log("Being an obedient creature of Allah SWT");
    console.log(this);
  }
}

console.log(userData.myMotivation)