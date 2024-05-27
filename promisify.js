function promisify(callbackapi) { // Convert callback-based function to a Promise-based one
    return function promisified(...args) { // Return a new function that returns a Promise
        return new Promise((resolve, reject) => { // Create a new Promise
            const newArgs = [
               ...args,
                function (err, result) { // Add a callback to the arguments
                    if (err) {
                        reject(err) // Reject the Promise if there's an error
                    }
                    resolve(result) // Resolve the Promise with the result
                }
            ]
            callbackapi(...newArgs) // Call the original callback-based function
        })
    }
}