const sum = (...givenNumbers) => givenNumbers.reduce((acc, num) => acc + num, 0);
const result = sum(1, 2, 3, 4, 5);
// result is 10
console.log(result);