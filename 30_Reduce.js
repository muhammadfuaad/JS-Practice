let nums = [1, 2, 3, 4]
let sum = nums.reduce(function(acc, currVal) {
  return acc + currVal
}, 0)

console.log("sum:", sum);

let nums2 = [1, 2, 3, 4]
let sum2 = nums.reduce(function(acc, currVal) {
  console.log(`acc: ${acc}, currVal: ${currVal}`);
  return acc - currVal
}, 0)

console.log("sum2:", sum2);