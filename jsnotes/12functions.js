/* Ways to declare a function

1. Declaration function
2. Anonymous function
3. Expression function
4. Arrow function
*/


// 1. Declaration function

function printFullName(firstName, lastName) {   //a function with two parameters
    return `${firstName} ${lastName}`
}

console.log(printFullName('yaswanth', 'vendra'))


function printFullName(firstName, lastName='sai') { //a paramter with default value.
    return `${firstName} ${lastName}`
}

console.log(printFullName('yaswanth'))
console.log(printFullName('yaswanth', 'vendra'))

// taking unknwown number of arguments in a function.
//IN a declaration function, a function scoped "arguments" named, array like object is provided. Anything we pass in as an argument for the function can be accessed from arguments object inside the function.
function sumAllNumbers() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum
}

console.log(sumAllNumbers(1,2,3,4))


// 2. Anonymous function(without name)
const anonymousFun = function(){
    console.log("I'm an anonymous function. So, i don't have a name")
}
anonymousFun()

// 3. Expression function
// expression functions are anonymous functions, except here we can call the assigned variable name to make the function call and return the function value.
const square = function(n){
    return n*n
}

console.log(square(4))


// Self Invoking Functions
// (function(n){
//     console.log(n*n)
// })(4);

// 4. arrow functions

const sq = n => {
    return n*n
}

console.log(sq(3))

// arrow functions with parameters having default values

const fullName = (firstName,lastName='vendra') =>{
    return `${firstName} ${lastName}`
}

console.log(fullName('yaswanth'))