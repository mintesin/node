const event = require('events')
const fs = require('fs')

class FindRegex extends event{
    constructor(regex,file) {
        super()
        this.regex = regex
        this.file=file
    
    } 
   
    find() {
        
        fs.readFile(this.file,'utf8', (err, content) => {
            if (err) {
                return this.emit('Error',err)
            } 
            this.emit('fileread', this.file)
            const matches = String(content).match(this.regex)
            if (matches) {
                matches.forEach(element => {
                    this.emit('found',this.file,element)
                });
            }
        }) 
            
        
        return this 
    }
}

const findregex = new FindRegex('[a-z]','min.txt') 
findregex.find()
    .on('fileread', file => { console.log(`The file ${file} is found`) })
    .on('found', (file, element) => { `In the ${file},${element} is found ` })
    .on('Error',err=>{console.log(`The Error ${err.message} has happened`)})      