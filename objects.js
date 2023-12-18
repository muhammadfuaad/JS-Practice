let myGoals = {
    Marriage: "As soon as possible",
    Salary: "100000 PKR",
    "Number of marriages": 4
}
const {Salary} = myGoals
console.log("Salary:", Salary)

const {Marriage: myMarriagePlan} = myGoals
console.log("myMarriagePlan:", myMarriagePlan)
// Notes
// When a key is a valid identifier (starts with a letter, followed by letters, digits, or underscores), 
// you can use it without quotes. However, if a key does not follow the rules for a valid identifier or if 
// you want to use special characters in the key, you must enclose it in quotes.
console.log("myGoals.Marriage:", myGoals.Marriage)
console.log("typeOf myGoals.Marriage:", typeof myGoals.Marriage)

console.log("myGoals[Salary]:", myGoals["Salary"])
console.log("typeof myGoals[Salary]:", typeof myGoals["Salary"])

console.log("myGoals[Number of marriages]:", myGoals["Number of marriages"])
console.log("typeof myGoals[Number of marriages]:", typeof myGoals["Number of marriages"])


