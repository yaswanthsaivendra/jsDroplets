// Set is a collection of unique elements.

//create an empty set.
const emptySet = new Set()
console.log(emptySet)   //{}


//creating set from array

const languages = [
    'Telugu',
    'English',
    'Spanish',
    'French',
    'Spanish',
]

const setOfLanguages = new Set(languages)   //Set(iterable,)
console.log(setOfLanguages)

//we can iterate over a set.
for (const lang of setOfLanguages) {
    console.log(languages)
}

console.log(setOfLanguages.size)    //size of the set
setOfLanguages.add('portugese')     //adding an element.
setOfLanguages.delete('protugese')  //deleting an element.

//returns a boolean by checking if an element exists or not.
console.log(setOfLanguages.has('English'))  //true

setOfLanguages.clear()
console.log(setOfLanguages)


// Union of sets ( A U B)
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)


// Intersection of sets

A = new Set(a)
B = new Set(b)

c = a.filter((num) => B.has(num))
C = new Set(c)

console.log(C)


// Difference of sets

A = new Set(a)
B = new Set(b)

c = a.filter((num) => !B.has(num))
C = new Set(c)

console.log(C)