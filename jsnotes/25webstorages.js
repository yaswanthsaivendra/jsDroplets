// web storages
// consists of 1.Session Storage(expired with session) and 2.Local Storage(no expiration date)

//Use Cases\
/*
store data temporarily
saving products that the user places in his shopping cart
data can be made available between page requests, multiple browser tabs, and also between browser sessions using localStorage
can be used offline completely using localStorage
Web Storage can be a great performance win when some static data is stored on the client to minimize the number of subsequent requests. Even images can be stored in strings using Base64 encoding.
can be used for user authentication method
*/


// Web Storage objects:
/*
localStorage - to display the localStorage object
localStorage.clear() - to remove everything in the local storage
localStorage.setItem() - to storage data in the localStorage. It takes a key and a value parameters.
localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.
*/

//Setting Item
/*
localStorage.setItem('firstName', 'Yaswanth')
console.log(localStorage);
*/

//When we set data to be stored in localStroage, it will be stored as a string.
//So, when we r storing an object or an array, we should stringify it fist, otherwise we may loss the array (0r) object structure.

/*
const skills = ['HTML', 'CSS', 'JS', 'Python']
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)
*/

//And when we are getting data which is array or object, we should parse it.
/*
let skills = localStorage.getItem('skills')
let skillsObj = JSON.parse(skills, undefined, 4)
console.log(skillsObj);
*/
