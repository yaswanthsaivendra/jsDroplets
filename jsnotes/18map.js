// Map is a collection of elements where each element is stored as a key, value pair.

// creating an empty map
const map = new Map();
console.log(map)


//creating a map from array.


const countries = [
    ['India', 'Indian'],
    ['America', 'American'],
    ['Canada', 'Canadian']
]

const countriesMap = new Map(countries)
console.log(countriesMap)
console.log(countriesMap.size)

//Adding values to the map
countriesMap.set('Europe', 'Europian')
countriesMap.set('Africa', 'African')
console.log(countriesMap)

// Getting a value from Map
console.log(countriesMap.get('Europe')) //we can get the value using key.

//checking if a key exist in map or not.
console.log(countriesMap.has('America')) //true


// using loops with maps.
for (const country of countriesMap) {
    console.log(country)
}

for (const [country, nationality] of countriesMap) {
    console.log(country, nationality)
}