let studentsData = [
  {
    name: "Muhammad Fuaad",
    age: 28,
    education: "Graduation"
  },
  {
    name: "Muhammad Ahmed",
    age: 28,
    education: "Graduation"
  },
  {
    name: "Muhammad Ali",
    age: 42,
    education: "Graduation"
  }
]

let overagedStudent = studentsData.filter((student)=>{
  return student.age>35
})

let overagedStudent2 = studentsData.filter((student)=>student.age>35)

console.log(overagedStudent);
console.log(overagedStudent2);

// Notes:
// If we add curly braces in filter/map callback, then we'd need to add a return statement as well.