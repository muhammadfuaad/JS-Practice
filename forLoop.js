for (let i = 0; i < 5; i++) {
    console.log(i);
}
// The for loop is widely used when the number of iterations is known or can be determined in advance. 
// It consists of three parts:
// for (initialization; condition; iteration) {
//     // code to be executed in each iteration
// }

// The do-while loop is used when you want to ensure that the code inside the loop executes at least once, 
// regardless of whether the condition is true or false. The structure is as follows
// do {
//     // code to be executed
// } while (condition);

{let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 5);
}
// The while loop is used when the number of iterations is not known in advance, and the loop continues
//  as long as the specified condition is true:
//  while (condition) {
//     // code to be executed
// }
{
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }
}

// Extract the smallest neumber out of an array
let array = [0, 1, 2, 3, 5]
{
    let i = 0;
    while (i < array.length) {
        console.log(array[4])
        i++;
    }
}