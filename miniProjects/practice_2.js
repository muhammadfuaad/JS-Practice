let array = [1, 2, 3, 4, 5, 6, 7]
{
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum = array[i] + sum
    }
    console.log("Sum of for loop:", sum)
}

{
    let i = 0
    let sum = 0
    while (i < array.length) {
        sum = array[i] + sum
        i++;
    }
    console.log("Sum of while loop:", sum)
}
