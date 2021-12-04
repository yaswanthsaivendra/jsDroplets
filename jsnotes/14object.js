// creating an empty object.
const emptyObject = {}

//person object
//have keys - firstName, lastName, age, country, city, skills, isMarried
//values of properties or keys could be a string, number, boolean, an object, null, array, undefined or a function.

const person = {
    firstName : 'yaswanth',
    secondName : 'sai',
    age : 19,
    country : 'India',
    city : 'pakistan_ewww',
    skills: [
        'Assembly',
        'shell scripting',
        'reverse engineering',
        'exploit devlopment',
        'soc operations'
    ],
    isMarried : true,
    'phone number' : '+911234567890',
}
console.log(person)

//Accessing values
//1. using . operator(can only be used if key is a single word)
console.log(person.firstName)
console.log(person.age)
console.log(person.skills)

//2. using square bracket and key name.
console.log(person['firstName'])
console.log(person['age'])

//We cannot access the key 'phone number' using . operator, we should only use the square bracket method.
console.log(person['phone number'])

const person2 = {
    firstName: 'Dev',
    lastName: 'visawadia',
    age : 18,
    country : 'USA',
    city : 'New York',
    skills: [
        'HTML',
        'CSS',
        'Javascript',
        'React',
        'python'
    ],
    getFUllName : function() {
        return `${this.firstName} ${this.lastName}`     //here, this keyword refers to the object itslef.
    }   //we use the this keyword to access the values of different properties of object.
        //we cannot use arrow function as object method, coz inside the arrow function this refers to the window instead of the object itself.
}

//we can add new key-value pairs or modify the existing ones.
person.nationality = 'Indian'
person.city = 'penugonda'
person.skills.push('Javascript')


// Object Methods

//1. object.assign
// To copy an object without modifying original object.
const copyperson = Object.assign({}, person)    //.assign(target, source)
console.log(copyperson)

//2. object.keys
// To get the keys or properties of an object as an array.

const keys = Object.keys(copyperson)
console.log(keys)

// 3. object.keys
// To get the values of an object as an array.

const values = Object.values(copyperson)
console.log(values)

//4. object.entries
// To get the keys and values in an arrays of array.

const entries = Object.entries(copyperson)
console.log(entries)

// hasOwnProperty()
// To check if a specific key or property exist in an object.
console.log(copyperson.hasOwnProperty('firstName')) //true
