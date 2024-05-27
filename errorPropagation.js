const fs = require('fs')
// WHEN FUNCTION IS BIENG DEFINED THE ERROR IS PROPAGETED WITH THE CALLBACK RETURN .
// WHEN THE FUNCTION IS USED THE ERROR CAN BE DISPLAYED ON THE CONSOLE.
function readFile(filename, callback) {
    fs.readFile(filename, 'utf8', (data, err) => {
        let parsed;
        if (err) {
            return callback(err) //PROPAGETED ERROR
        }
        else {
            try {
                parsed = parse(data)
                
            }
            catch (err) {
                return callback(err)
            }
        }
        callback(null,parsed)
    })
}
let filename = 'min.txt';
readFile(filename, (err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
})

