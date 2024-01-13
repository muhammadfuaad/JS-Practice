let promise = new Promise(function(resolve, reject) {
  setTimeout(function(params) {
    let error = true
    if(!error) {
      resolve({name: "Muhammad Fuaad", email: "fuaad29@gmail.com"})
    } else {
      reject("ERROR: Something Has Went Wrong")
    }
  })
})

async function consumePromise(error) {
  try {
    const response = await promise
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise()