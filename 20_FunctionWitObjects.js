// code 1
function calculatePrice1(...num1) {
  return num1
}

console.log(calculatePrice1(100, 200, 300, 400, 500));

function calculatePrice2(num1, ...num2) {
  return num2
}

console.log(calculatePrice2(100, 200, 300, 400, 500));

// code 2
function calculatePrice1(...num1) {
  console.log(num1)
}

calculatePrice1(100, 200, 300, 400, 500);

function calculatePrice2(num1, ...num2) {
  console.log(num2)
}

calculatePrice2(100, 200, 300, 400, 500);

// Questions:
// Why does above code 1 displays "undefined" in console when both codes are there while it doesn't show undefined
// when display alone. 