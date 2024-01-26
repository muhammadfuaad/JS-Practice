let array = [1, 2, 3]
let array1 = array.filter((num)=>num>1)
console.log(array1);

let array2 = array.filter((num)=>{
  return  num>1
})
console.log(array2);

// Question:
// Why do we need to add a return statement in 2nd code?