// Destructuring is a way to unpack arrays, and objects and assigning to a distinct value.

//Destructuring arrays
const numbers = [1, 2, 3]
let[numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Django', 'DRF', 'Postgresql']
]

let[frontEnd, backEnd] = fullStack

console.log(frontEnd)
console.log(backEnd)

// If we like to skip on of the values in the array we use additional comma.
const names = ['Yash', 'Suarav', 'Darpan', 'Muskan', 'Shubham']
let[, secondPerson, , fourthPerson,] = names //first, third and last person are omitted.

console.log(secondPerson, fourthPerson)

//we can use default value, if in case the value of an array element for a particular index is undefined.
const names2 = [undefined, 'Yash', 'Bansal']
let [
    firstPersonName = 'YashVendra',
    secondPersonName,
    thirdPersonName,
    fourthPersonName = 'John'
] = names2

console.log(firstPersonName, secondPersonName, thirdPersonName, fourthPersonName)

// We can not assign variable to all the elements in the array.
//  We can destructure few of the first and we can get the remaining as array using spread operator(...).

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

//Destructuring during iteration
const countries = [['yash', 'Vendra'], ['Anu', 'Vendra'], ['raja', 'Vendra']]

for (const [name, surname] of countries) {
    console.log(name, surname)
}




// Destructuring object
// While destructuring, the name of the variabe we use, should be same as the key of the object.

const rectangle = {
    width : 20,
    height : 10,
    area : 200
}

let{width, height, area, perimeter} = rectangle

console.log(width, height, area, perimeter) //20 10 200 undefined

//Renaming during destructuring
const rectangle1 = {
    width1 : 20,
    height1 : 10,
    area1 : 200
}

let{ width1: w, height1: h, area1: a, perimeter1: p} = rectangle1
console.log(w, h, a, p) //20 10 200 undefined


//using default values for undefined keys.
const rectangle2 = {
    wi : 20,
    he : 10,
    ar : 200
}

let{ wi, he, ar, pe = 50} = rectangle2
console.log(wi, he, ar, pe)

// Destructuring object keys as function parameters.
const rect = {
    width : 20,
    height : 10
}

const calculatePerimeter = ({width, height}) => {
    return 2 * (width + height)
}
console.log(calculatePerimeter(rect))


//destructuring object during iteration
const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
]


for (const {task, time, completed} of todoList){
    console.log(task, time, completed)
}