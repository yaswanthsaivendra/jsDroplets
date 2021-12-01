// Strings

let firstName = 'yash';
let lastName = 'vendra';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// We can use escape character to write long literal strings.

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019."


// Template Literals (Template strings).
// These are strings in back quotes in which we can also inject data by enclosing an expression within curly braces preceded by a $ sign.
// Ex :
let age = 18;
let templateString = `bob is ${age} years old`

// This is also called as string interpolation method.
//The expressions in the template strings could be a value or some operations (comparison ,athimetic operations, ternary operation).


let a = 2
let b = 3
console.log(`${a > b}`);    //false


// String Methods

let js = 'Javascirpt'
console.log(js.length)  //10

// We can access each character in string using its index but we cannot modify them as strings are immutable.
console.log(js[0]); //J
console.log(js[4]); //s

let lastIndex = js.length - 1;
console.log(js[lastIndex]); //t

console.log(js.toUpperCase())
console.log(js.toLowerCase())

// substr()     - it takes two arguments, the starting index and number of characters to slice.
console.log(js.substr(3,7)) //ascript

// substring()    - it takes two arguments, the starting index and stopping index but it doesn't include the character at stopping index.

//split()
let string = '30 Days Of JavaScript'

console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

//trim()
console.log(string.trim())  // removes spaces at the beginning and at the end of the string.

// includes()   - takes substring as an argument and checks whether it is there in the string or not, and returns a boolean value.

console.log(string.includes('Days'))    //true
console.log(string.includes('days'))    //false

// replace(oldsubstring, newsubstring)

console.log(string.replace('30', '10'));

// charAt() takes index and it returns the value at that index.
console.log(string.charAt(0))   //3

// charCodeAt() takes index and it returns the char code(ASCII number) of that value at that index.
console.log(string.charCodeAt(3));      // ASCII number of D is 68


// indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the fisrt occurence of substring if does not exist it returns -1
console.log(string.indexOf('Days')) //3
console.log(string.indexOf('days')) //-1

//lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the last occurence(i.e., first occurence from the end of the string) of substring if it does not exist it returns -1.
console.log(string.lastIndexOf('Days')) //6

// concat(substring, substring, substring)

let ourString = '30'
ourString = ourString.concat("Days", "of", "Javascript")
console.log(ourString);  //30DaysofJavascirpt

// startsWith() and endsWith() - returns a boolean value.
console.log(ourString.startsWith('30')) //true
console.log(ourString.endsWith('script'))   //true

console.log(ourString)
//search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.

console.log(ourString.search('Days'))   //2
console.log(ourString.search('days'))   //-1

// match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null.

console.log(ourString.match('30'))  //[ '30', index: 0, input: '30DaysofJavascript', groups: undefined ]


// repeat(n): it takes a number as argument and it returns the repeated version of the string.

let smallString = 'Bob';
console.log(smallString.repeat(5))