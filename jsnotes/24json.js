// JavaScript Object Notation
// The only difference b/w a javascript object and json is that the keys of json should be a string.

// Converting JSON to JavaScript Object.
// Mostly we fetch JSON data from a HTTP response or from a file, but we can store JSON as a string here.

//JSON.parse()
//JSON.parse(JSON_data, reviver)    //reviver is a optional callback function.

const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
}`

const usersObj = JSON.parse(usersText)
console.log(usersObj);

// using reviver function as formatter.
const usersObj1 = JSON.parse(usersText, (key, value) => {
    let newValue = typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
    return newValue
})
console.log(usersObj1);




// Converting Object to JSON
// JSON.stringify(obj, replacer, space)
//replacer is used as filter and the space is used for indentation.(these two are optional).

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

const txt = JSON.stringify(users, undefined, 4) //here we are using undefined in place of filter, as we r not interested in filtering any of the keys.
console.log(txt)

//using filter
//filtering the required keys.

const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Pyhton'],
    age: 250,
    isLoggedIn: false,
    points: 30
  }


const txt1 = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
console.log(txt1)