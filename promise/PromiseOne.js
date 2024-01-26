let promise = new Promise(function(resolve, reject) {
  setTimeout(function(params) {
    let error = false
    if(!error) {
      resolve({name: "Muhammad Fuaad", email: "fuaad29@gmail.com"})
    } else {
      reject("ERROR: Something Has Went Wrong")
    }
  })
})

const extractedUser = promise.then((userData)=> {
  // console.log(userData)
  return userData
}).then((userData)=> {
  console.log("email:", userData.email);
})
.catch((error)=> {
  console.log("error:", error);
})
.finally(()=> {
  console.log("Promise either resolved or rejected");
})
// console.log(extracteduser)
