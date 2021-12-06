//1. forEach
// Iterates over an array elements.
// forEach function takes a callback function with element, index and array itself as parameters.(array and index are optional).

/*
arr.forEach(function (element, index, arr) {
    //code goes here
})
*/

//Example
let sum = 0;
const numbers = [1,2,3,4,5];
numbers.forEach((num) => sum += num)

console.log(sum)


//2. map
// Iterate over an array elements and modify the array elements.
// It takes a callback function with element, index and array itself as paramters(index and array are optional) and returns a new modified array.

/*
const modifiedArray = arr.map(function(element, index, arr) {
    //code goes here
})
*/

//example
const numberSquare = numbers.map((num) => num*num)

console.log(numberSquare)

//3. filter
// filter out items which full fill filtering conditions and return a new array.
const countires = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const countiresContainingLand = countires.filter((country) => country.includes('land'))
console.log(countiresContainingLand)


// 4. reduce
//reduce takes a callback function and an optional intial value as paramter
//the call back takes accumulator, current.
// finally returns a single value.
//It's a good practice to define the optional intial value

const callbackReduce = function (accumulator, current) {
    return (accumulator + current)
}

const sumReduce = numbers.reduce(callbackReduce, 0)
console.log(sumReduce)


const sumReduce2 = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sumReduce2)



// 5. every
// check if all the elements are similar in one aspect. returns a boolean value.

const names = ['yash', 'vendra', 'raja', 'shubham']
const areAllStr = names.every((name) => typeof name === 'string')   //to check whether if all are strings.

console.log(areAllStr)  //true


// 6. find
//return the first element which satisfies the condition.
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)


// 7. findIndex
// return the position of first element which satisfies the condition.

const result = ages.findIndex((age) => age < 20)
console.log(age)


// 8. some() method tests whether at least one element in the array passes the test implemented by the provided function. If so, returns true otherwise false.

const even = numbers.some((num) => num %2 === 0)
console.log(even) //true


// Sorting

//Sorting String values.
// Generally sort() method is used to sort strings.
const products = ['Milk', 'Coffee', 'Sugar', 'Apple', 'grape']
console.log(products.sort())


// Sorting Numeric values
//If we try to sort numeric values using sort method, it produces a wrong result as sort method compare them after converting them into strings.
// we can use a callback function inside sort() method to produce expected result.

const numericValues = [9.81, 3.14, 33, 100, 21]
console.log(numericValues.sort())   //produces a wrong result.

//sort() method make changes to the actual array.
numericValues.sort(function (a, b) {
    return a-b              //produces result in ascending order.
})
console.log(numericValues)

numericValues.sort(function (a, b) {
    return b-a              //produces result in descending order.
})
console.log(numericValues)


//Sorting object arrays.
//To sort array of objects, we compare values using their keys.

const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyo', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })


