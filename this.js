let myBioData = {
  name: "Muhammad Fuaad",
  age: 28,
  maritalStatus: "Unmarried",
  welcomeMessage: function() {
    console.log("welcomeMessage:", `Assalam-o-alaikum! How're you ${this.name}`)
    console.log("inner this:", this)

  },
}

console.log("1st myBioData:", myBioData)
myBioData.welcomeMessage()
// console.log("outer this:", this);
myBioData.name = "Muhammad Fwad"
console.log("2nd myBioData:", myBioData)
myBioData.welcomeMessage()

