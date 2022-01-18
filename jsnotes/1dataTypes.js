// Primitive data types in JavaScript include:

// Numbers - Integers, floats
// Strings - Any data under single quote, double quote or backtick quote
// Booleans - true or false value
// Null - empty value or no value
// Undefined - a declared variable without a value

// Note : Primitive data types are immutable.
//We can directly compare primitive data types, as comparing primitive data types does mean that comparing their values.

//EX:
let numOne = 3;
let numTwo = 3
console.log(numOne==numTwo)      //true


/*
Non-primitive data types in JavaScript includes:

Objects
Functions
Arrays
*/

// Note : Non-Primitive data types are mutable.
//ex:
let nums = [1,2,3,4];
nums[0]=0;
console.log(nums)

// We cannot compare non-primitive data types directly, as comparing non-primitive data types does mean that comparing their references but not values.
//Ex:
let num = [1,2,3,4];
let numbers = [1,2,3,4];
console.log(num == numbers)    //false

numbers = nums;
console.log(nums == numbers)    //true



