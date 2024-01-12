{
    for (let i = 0; i < 5; i++) {
        console.log("1st:", i);
    }
}

// for-of loop
{
    let greeting  = "Assalam-o-alaikum wrwb!"
    for (let i = 0; i < 5; i++) {
        for (const greetingLeter of greeting) {
        console.log("greeting letter:", greetingLeter);
        }
    }
}
// The for loop is widely used when the number of iterations is known or can be determined in advance. 
// It consists of three parts:
// for (initialization; condition; iteration) {
//     // code to be executed in each iteration
// }



// Extract the smallest neumber out of an array
let array = [0, 1, 2, 3, 5]
{
    let i = 0;
    while (i < array.length) {
        console.log("4th:", array[i])
        i++;
    }
}