let promise = new Promise(function(resolve, reject) {
  setTimeout(function(params) {
    let error = false
    if(error) {
      resolve({name: "Muhammad Fuaad", email: "fuaad29@gmail.com"})
    } else {
      reject("ERROR: Something Has Went Wrong")
    }
  })
})

async function consumePromise() {
  const response = await promise
  console.log(response);
}
consumePromise()

// Notes
// The issue with async/await is that it doesn't handles the errors. So, we need to use try/catch statements to
// handle the errors.
