let val1 = 10
let val2 = 5

function addNum(num1, num2) {
  let total = num1 + num2
  return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 20)

// function one(){
//   console.log("one")
//   two()
// }
// function two(){
//   console.log("two")
//   three()
// }
// function three(){
//   console.log("three")
// }

// one()
// two()
// three()

// Notes:
// Steps involved:
// 1) Global execution, in which "this" is assigned
// 2) Memory Phase, in which all the variables are alloctaed the memory slot. it has following operations,
  // val1     -> undefined
  // val2     -> undefined
  // addNum   -> definition
  // result1  -> undefined
  // result2  -> undefined 
// 3) Execution Phase in this phase, variables are assigned values and a new call stack will be generated
//  for addNum function.
// val1     -> 10
// val2     -> 5