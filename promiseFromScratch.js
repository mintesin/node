function intro(name) { // define a function called 'intro' with a parameter 'name'

    return new Promise((resolve, reject) => { // create a new Promise object
        // set a timeout of 1000ms (1 second)
        (setTimeout(() => {
            resolve(name) // if successful, resolve the Promise with the 'name' value
            reject('jerom') // if there's an error, reject the Promise with the value 'jerom'
        }))
    })
}