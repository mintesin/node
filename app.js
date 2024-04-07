const EventEmmitter = require(events).EventEmmitter;
const fs = require('fs');
class findpattern extends EventEmmitter{
    constructor(pattern) {
        super();
        this.pattern = pattern
        this.files = []
    }
    addFile(file) {
        return this.files.push(file)
    }
    find() {
        this.files.forEach(file => {
            fs.readFile(file, (err, content) => { 
                if (err) {
                    return this.emmit("error","Error Found:" + err)
                }
                this.emit('fileread', console.log('teh file you have found is wrong in many ways' + file))
                let match = null ;
                match = content.match(this.pattern)
                match.forEach(item=>{this.emit('found',console.log("The match found in"+ file + 'is '+ item)})
            })
        })
    }
}