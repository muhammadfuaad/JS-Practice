let myGoalsfor2024 = {
  Marriage: "As soon as possible",
  numberOfMarriages: "4",
  numberOfChildren: "As much as Allah Subhanahu blessed with"
}

for (const key in myGoalsfor2024) {
  // console.log(key);
  // console.log(myGoalsfor2024[key]);
}
// for-of loop isn't working for objects

// for (const key of myGoalsfor2024) {
//   console.log(key);
// }

let array = ["Mehsum", "Shahzaib", "Mahad"]
for (const key of array) {
  console.log(key);
}

for (const key in array) {
  console.log(array[key]);
}

// Notes
// 1) for-of loop iterates over the elemnts of an array and doesn't work for objects
// 2) for-in loop works for both arrays and objects but it iterates over the index(in case of array) 
//    and key(in case of objects)
// 3) to iterate over the value in objects, we need to write it like "object[key]"