// let promiseOne = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     console.log("Task completed");
//     resolve({userOne: "Muhammad Fuaad", email: "fuaad29@gmail.com"})
//   }, 10000)
// })
// promiseOne.then(function(userOne, email) {
//   console.log(userOne, email);
// })

let promise2 = new Promise(function(resolve, reject) {
  setTimeout(function(params) {
    let error = true
    if(error) {
      resolve({user2: "Muhammad Fuaad", email2: "fuaad29@gmail.com"})
    } else {
      reject("ERROR: Something Went Wrong")
    }
  })
})

const extractedUserTwo = promise2.then((user2)=> {
  console.log(user2)
}).catch((error)=> {
  console.log(error);
})
console.log(extractedUserTwo)
