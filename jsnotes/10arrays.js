// creating an empty array

//1. using Array constructor
const emptyArray = Array()

console.log(emptyArray)

//2. using square brackets

const emptyArr = []

const exampleArr = [
    'yash',
    250,
    true,
    { country : 'India', city : 'penugonda'},
    {skills : ['HTML', 'Python', 'Javascript']}
]
console.log(exampleArr)


const numbers = [1, 2, 3, 4, 5]

console.log(numbers[0])
console.log(numbers.length)


// methods on array

const eightEmptyValues = Array(8)  //creates an array with 8 empty values.
console.log(eightEmptyValues)

const five0Values = Array(5).fill(0) //creates five element values filled with 0.

//concatenation

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)

const nums = [1, 2, 7, 6, 5, 3, 4, 5, 6]
console.log(nums.length)
console.log(nums.indexOf(4))
console.log(nums.lastIndexOf(5))    //it gives the index of fist occurence of that element from the end.
console.log(nums.includes(9))   //false
console.log(Array.isArray(nums))    //to check if the data type is array or not.
console.log(nums.toString())    //converts an array to a string.

console.log(nums.join(' ')) //it is used to join the elements of the array with the paramter as a seperator(by default, comma is used as seperator) and returns a string.

console.log(nums.slice(1,4)) //takes in first and last index as paramters and doesn't include the element at last index in the output array.

nums.push(10) //push an element to the end.
console.log(nums)
nums.pop()    //pop an element from the end.
console.log(nums)

nums.shift()    //remove an element from the beginning.
console.log(nums)

nums.unshift(1)     //adds an element to the beggining.
console.log(nums)

nums.reverse()  //permanently reverse an array.
console.log(nums)

nums.sort()     //sort the array.
console.log(nums)