// Numbers

let age = 18
const PI = 3.14

console.log(age, PI);


// Working with built-in Math library.

console.log(Math.round(PI))     // round values
console.log(Math.floor(PI))     // round down
console.log(Math.ceil(PI))      // round up

console.log(Math.min(-5, -2, 0, 3, 5));     // returns the min value
console.log(Math.max(-5, -2, 0, 3, 5));     // returns the max value


console.log(Math.PI);   // value of PI
console.log(Math.E);    // Value of E

console.log(Math.abs(-5))   //5
console.log(Math.sqrt(25)); //5
console.log(Math.pow(2,3)); //2 power 3 = 8

console.log(Math.log(2));
console.log(Math.sin(60));
console.log(Math.cos(30));


// Random number generation
let randomNum = Math.random()       // creates a number between 0 to 0.99
let numBtnZeroAndTen = randomNum * 11;  // this gives min : 0 and max : 10.99

console.log(Math.floor(numBtnZeroAndTen))   // this gives number between 0 to 10.



