// let promiseOne = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     console.log("Task completed");
//     resolve({userOne: "Muhammad Fuaad", email: "fuaad29@gmail.com"})
//   }, 10000)
// })
// promiseOne.then(function(userOne, email) {
//   console.log(userOne, email);
// })

let promiseTwo = new Promise(function(resolve, reject) {
  setTimeout(function(params) {
    let error = true
    if(!error) {
      resolve({userTwo: "Muhammad Fuaad", emailTwo: "fuaad29@gmail.com"})
    } else {
      reject("ERROR: Something Went Wrong")
    }
  })
})

const extractedUserTwo = promiseTwo.then((userTwo)=> {
  console.log(userTwo)
}).catch((error)=> {
  console.log(error);
})
console.log(extractedUserTwo)
