let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let largestNumber = array[0]
let smallestNumber = array[0]
{
    let i = 0;
    while (i < array.length) {
        if(array[i] > array[i-1]) {
            largestNumber = array[i]
        }
        if(array[i] < array[i-1]) {
            smallestNumber = array[i]
        }
        i++;
    }
    console.log(largestNumber)
    console.log(smallestNumber)

}