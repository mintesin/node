//Use process.nextTick to make synchronous code into asynchronous co
const fs = require('fs')
const cache = {} 
function readAsync(filename, callback) {
    if (cache[filename]) {
        //pushing to the top of the event que 
        // setImmidiate can alos be used in this case 
        process.nextTick(() => callback(cache[filename]))
    }
    else {
        fs.readFile(filename, (err, data) => {
            cache[filename] = data;
            callback[data]
        })
    }
}




// Callback conventions
// 1. callback argument should be at the last of the function arguments
// 2. In the callback error comes first as an argument of  the callback
//  ERROR PROPAGATION
function readJSON(filename, callback) {
    fs.readFile(filename, (err, data) => {
        if (err) {
            callback(err)
        }
        try {
            let parsed = JSON.parse(data);

        }
        catch (err) {
            return callback(err)
        }
        callback(null, parsed);
    })
} 
//You cannot use throw error in callbacks in node js 
//Because it will terminate the program and stop execution 
//So we have to use callback with errors 
//UNCAUGHT EXCEPTION
