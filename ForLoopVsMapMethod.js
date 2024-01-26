{
  const numbers = [1, 2, 3, 4];
  const squaredNumbers = []
    for (let i = 0; i < numbers.length; i++) {
      // squaredNumbers.push(numbers[i] * numbers[i]);
      (numbers[i] * numbers[i]);
    
  }
  console.log(squaredNumbers);
}
// squaredNumbers is now [1, 4, 9, 16]

{  
  const numbers = [1, 2, 3, 4];
  const squaredNumbers = numbers.map((num) => num * num);
  console.log(squaredNumbers);
}
  // squaredNumbers is now [1, 4, 9, 16]