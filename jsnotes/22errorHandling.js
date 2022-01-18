// Error Handling

try {
    // code that may throw an error
} catch (err) {
    // code to be executed if an error occurs
} finally {
    // code to be executed regardless of an error occurs or not
}

//example

try {
    let lastName = 'vendra'
    let fullName = firstName + ' ' + lastName
} catch (error) {
    console.error(error)
} finally{
    console.log('In any case I will be executed')
}

// catch block take a parameter whcih have name and message keys.

try {
    let lastName = 'vendra'
    let fullName = firstName + ' ' + lastName
} catch (error) {
    console.log('Name of the error', error.name)
    console.log('Error message', error.message)
} finally{
    console.log('In any case I will be executed')
}


//throw statement
//allows us to create a custom error. We can throw a string, number, boolean or an object.