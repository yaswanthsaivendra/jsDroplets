// Arithmetic operators
let a = 2
let  b = 5
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)




// Assignment operators
a += b
console.log(a)
a -= b
console.log(a)
a *= b
console.log(a)
a /= b
console.log(a)
a %= b
console.log(a)
a **= b
console.log(a)


// comparision operators
a = 2
b = 2

console.log(a == b) // == equal in value
console.log(a === b) // === exactly equal: equal in value and data type.

// for example:
console.log(0 == false) // true , equal in value
console.log(0 === false)    //false, not exactly equal.

console.log(a != b)
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)


//Logical operators.
/*
Logical AND - &&
Logical OR - ||
logical NOT - !

*/

//Increment and decrement operators.
let count = 0
console.log(count++)
console.log(++count)
console.log(count--)
console.log(--count)


//ternary operator
let number = 1
number > 0 ? console.log(`${number} is a positive number`) : console.log(`${number} is a non-positive number`)
