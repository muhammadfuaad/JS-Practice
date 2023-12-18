let firstArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log("firstArray.slice:", firstArray.slice(0, firstArray.length - 4))
console.log("firstArray:", firstArray)

let secondArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log("secondArray.splice:", secondArray.splice(0, secondArray.length))
console.log("secondArray:", secondArray)

let thirdArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log("thirdArray.splice:", thirdArray.splice(0, thirdArray.length - 4))
console.log("thirdArray:", thirdArray)

let fourthArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log("fourthArray[fourthArray.length - 1]:", fourthArray[fourthArray.length - 1])

let fifthArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
fifthArray.pop()
fifthArray.push(21)
fifthArray.unshift(33)
// unshift() adds the element at the start of the aray while the push() methods adds the element at the end of the array.
// pop() removes the last element from array.

console.log("fifthArray:", fifthArray)


// Notes:
// Slice() method takes up the slice from first argument and takes it upto the second argument excluding the last one.
// While the splice() method does the same but it removes the sliced portion from the original array.