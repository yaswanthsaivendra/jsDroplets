// Promises are just like promises in real world.
//They can have one of these three states : pending, resolved, rejected.
// Promises are used as an alternative to callbacks(as promises looks cleaner and easy to implement).

//promise takes a callback funcn which takes two parameters reject and resolve.
let p = new Promise((resolve, reject) => {
    let a = 1+1;
    if(a==2) {
        resolve('success');
    }
    else {
        reject('failure');
    }
})

p.then((message) => {
    console.log('this is in the then' + message);
}).catch((message) => {
    console.log('this is in the catch', message);
})