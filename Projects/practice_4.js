// Print the table of 2 except 8
for (let i = 1; i <= 10; i++) {
    let multiple = (2 * i)
    console.log("multiple:", multiple)
    console.log(multiple)
    if(multiple == 8) {
        break
    }
}