let array= ["JS", "Ruby", "Python"]
let emptyArray = []

let array1 = array.forEach((element)=>{
  console.log(element);
  emptyArray.push(element)
  console.log("inside emptyArray:", emptyArray);
  return element
})
console.log("Outside emptyArray:", emptyArray);


let array2 = array.map((element)=>element)

console.log("array1:", array1);
console.log("array2:", array2);