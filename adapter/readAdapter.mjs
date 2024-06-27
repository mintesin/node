import {readFile} from 'fs'
import { writeFile } from 'fs'
import { resolve } from 'path'

readFile(filename, options, callback){
    if (typeof options === 'function') {
        callback = options
    }
    
    else if(typeof options === 'string') {
        options={encoding:options}
    } 
    db.get(resolve(filename), { valueEncoding: options.encoding }, (err, value) => {
        if (err) {
            callback(err)
        }
        else {
            callback(null, value)
        }
    })

} 
writeFile(filename, content, options, callback) {
    if (typeof options === 'function') {
        callback= options 
    }
    else if (typeof options === 'string') {
        options = {encoding:options}
    }
    db.put(resolve(filename), contents, {
        valueEncoding:options.encoding
    },callback)
}