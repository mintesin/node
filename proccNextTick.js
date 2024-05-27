const { readFile } = require('fs')

const fs = require('fs').readFile 
const cache = new Map()
const filename='min.txt'
function consistentReadAsync(filename, callback) {
    if (cache.has(filename)) {
        process.nextTick(()=>callback(cache.get(filename)))
    }
    else {
        fs(filename, 'utf8', (err, data) => {
            if (err) {
                callback(err)
            }
            else {
                cache.set(filename, data)
                callback(data)
            }
        })
    }
}
consistentReadAsync(filename, data => {
    console.log(data)
})

