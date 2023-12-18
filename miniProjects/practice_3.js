let array = [1, 2, 3, 4, 5, 6, 7]
let reversedArray = []
for (let i = 0; i < array.length; i++) {
    console.log(array[(array.length - 1) - i])
    reversedArray.push(array[(array.length - 1) - i])
}
console.log("reversedArray:", reversedArray)