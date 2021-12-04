// Higher order functions are functions which take other function as parameter or return a function as a value.
// The function passed as a parameter is called callback.

const callback = (n) => {
    return n ** 2
}

//function to take callback function as parameter.
function cube(callback, n) {
    return callback(n)*n
}

console.log(cube(callback, 3))

// example
const numbers = [1, 2, 3, 4]

const sumArray = arr => {
    let sum = 0
    const callback = function(element) {
        sum += element
    }
    arr.forEach(callback)
    return sum
}

console.log(sumArray(numbers))


// setInterval and setTimeout are higher order functions.

//1. setInterval
// used to do some activity continously with in some interval of time.

/*
function callback() {
    //code goes here
}

setInterval(callback, duration) //duration in milli seconds.
*/

function sayHello() {
    console.log('Hello')
}

setInterval(sayHello, 1000) //prints hello in every second.


// 2. setTimeout
//used to do some action at some time in the future.

/*
function callback() {
    //code goes here
}
setTimeout(callback, duration)
*/

function sayHelloWorld() {
    console.log('Hello World')
}
setTimeout(sayHelloWorld, 2000) //prints hello World after 2 seconds.
