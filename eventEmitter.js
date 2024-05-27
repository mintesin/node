const eventEmmitter = require('events') 
const fs=require('fs')
const { stringify } = require('querystring')
function findregex(file, regex) {
    const event = new eventEmmitter() //INTIATING THE EVENT CLASS 
    fs.readFile(file, (err, content) => {
        if (err) {
            return event.emit("error", err) //IF ERROR HAPPENS IN READING THE FILE THE EMMMITTER 
            //EMITS AN ERROR TO THE LISTENER
        }
        event.emit('fileread',file) //MAKING SURE THAT THE FILE IS FOUND AND READ
        const matches = String(content).match(regex)
        if (matches) {
            matches.forEach(element => {
                event.emit('found',file,element)
            });
        }
    })
return event
}

const reg = '[a-z]'
findregex('min.txt', reg).on('fileread', file => {
                             console.log(`${file} is read`)
}).on('found', (file, elem) => {
                                     console.log(`${elem} is found in ${file}`)
                                }).on('error',err=>console.log(`${err.message} was found`))