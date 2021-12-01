console.log("this", "is", "js", "in external script");

//single line comment.
/* Multi
line
comment
 */

// Primitive Data types
/*
1. String
    "this is a string"
    'this is a string'
    `this is also a string`

2. Number
        Integer
        Floating point numbers

3. Boolean
        true
        false
4. undefined
        In js, if we don't assign a value to a variable, the value is undefined.
        In addition to that, if a fucntion is not returning anything, it returns undefined.

        ex:
        let firstName
        console.log(firstName)  //not defined, because it is not assigned any value yet.

5. Null     - empty value.
        ex:
        let emtpyvalue = null

6. Symbol
*/

/* Note :
In Javascript camel case is used, i.e., every word in a varibale (or)
function (or) method is seperated by a capital letters.
EX: firstNum, getElementById .
*/


//typeof operator
console.log(typeof 'yash')          //string
console.log(typeof('yash'))
console.log(typeof 5)               //number
console.log(typeof true)            //boolean
console.log(typeof null)            //object type
console.log(typeof undefined)       //undefined


// Javascript variables
/* Rules:
1. A JavaScript variable name should not begin with a number.
2. A JavaScript variable name does not allow special characters except dollar sign and underscore.
3. A JavaScript variable name follows a camelCase convention.
4. A JavaScript variable name should not have space between words.
*/

// We use let for declaring variables and const for declaring constants.

let firstName = 'yash';
let lastName = 'vendra';
const countryName = 'India';
let age = 18;
let isMarried = false;
