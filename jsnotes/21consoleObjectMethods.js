// Console Object Methods
//console methods are used for testing and debugging purposes.

console.log('Javascirpt, logging info in browser console.')
console.warn('This is Warning');
console.error('This is an error message') //to show error messages.

//to display information in console as table.
const names = ['yash', 'vendra', 'sai']
console.table(names)

const user = {
    name: 'Yash',
    title: 'programmer',
    country: 'India',
    city: 'vicecity',
    age : 19
}
console.table(user)

//console.time()
// We can start a timer with a unique name and end the timer using console.timeEnd() method.
//It displays the time elapsed b/w those two calls when the timer is ended.
const countires = ['India', 'England', 'Portugal']

console.time('For loop')

for (let i= 0; i< countires.length; i++) {
    console.log(countires[i])
}
console.timeEnd('For loop') //displays time elapsed in milli seconds.



console.info("this is informational message")
//console.assert() if assertion is false, it displays an error message to the console. if true, nothing happens.
console.assert(3 > 4, '3 is not greater than 4')
console.assert(4 > 3, '4 is greater than 3')


//console.count()  - it prints the number of times its called.
// It takes a string label as parameter.
const func = () => {
    console.count('this func has been called')
}
func()
func()
func()

// console.clear() //clears the console.