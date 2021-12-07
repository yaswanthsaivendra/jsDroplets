// Spread or Rest operator.
//(...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.


// Using spread operator to get the rest of the array elements.
const nums = [1, 2, 3, 4, 5, 6]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest);

// Using spread operator to copy array.
const evens = [0, 2, 4, 6, 8]
const evenNUmbers = [...evens]

// Using spread operator to copy object.
const user = {
    name : 'Yash',
    title : 'Programmer',
    country : 'India',
    city : 'Gtavicecity'
}

const copiedUser = {...user}
console.log(copiedUser);

//Modifying the object while copying.
const copiedUser1 = {...user, title:'hunter'}
console.log(copiedUser1)

// spread operator within arrow function.
const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args){
      sum += num
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4, 5))