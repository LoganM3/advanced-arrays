let studentNames = ['max', 'logan', 'hugo','mateo' ]

let teachers = [
    {
        name: 'damian',
        subjects: 'arrays,javascript,mongodb',
    },
    {
        name: 'Jonathan',
        subjects: 'arrays,javascript',
    }
]

//sort()
// const sortedStudentNames = studentNames.sort()
// console.log(sortedStudentNames)

// filter()
//const filteredStudentNames = studentNames.filter(
//     function (student){
//         return student == 'logan'
//     }
// 
// (student) => {
//     return student == 'logan'
// }
// 
// (student) => student === 'logan'
//
 //   (student) => true//don't do this
//)

//StudentNames = studentNames.filter((student) => true)

// .find()
// const logan = studentNames.find((student) => student === 'logan')
// console.log(logan)

// .some()
// const somelogan = studentNames.some((student) => student === 'logan')
// console.log('Do we have a logan?', somelogan)

// .every()
// const everylogan = studentNames.every((student) => student === 'logan')
// console.log("Everyone's a logan?", everylogan)

// .forEach()
// studentNames.forEach((student) => {
//     console.log(student)
// })



// .map()
// const justTheNames = teachers.map((teacher) => {
//     return teacher.name
// })
// console.log(justTheNames)

// .reduce()
let numbers = [2,12,5,9,8,-1,4,5,75,3]

let total = 0 
for(i = 0; i < numbers.length; i++){
    total += numbers[i]
}
console.log(total)

let totals = numbers.reduce((accumulator,currentValue) => accumulator + currentValue,0)

totals = numbers.reduce((accumulator,currentValue,index,array) => {
    if(index < 5){
        return accumulator + currentValue
    } else {
        return accumulator
    }
},0 ) // ,0 = the starting number
console.log(totals)
