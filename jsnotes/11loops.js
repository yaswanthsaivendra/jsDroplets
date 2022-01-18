//for loop
const arr = [1,2,3,4,5]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


//while loop
let i = 0
while (i<=5) {
    console.log(i)
    i++
}

//do while loop
let i = 0
do {
    console.log(i)
    i++
} while (i<=5);

//for of loop
//for of loop can be very handy to iterate over an array and if we are not interested in using the index of array.

const nums = [1, 2, 3, 4, 5, 6]
for (const num of nums) {
    console.log(num)
}

//As usual, we can make use of continue and break statements in loops.