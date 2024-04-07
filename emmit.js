const EventEmmitter = require('events').EventEmmitter;
const { match } = require('assert');
const fs = require('fs')
// This function resturns three events of emmitter
// It needs to have another calling code with the sam sturcture of listeners
//Understand that event can be defined as a function and retruned as a function
//The argument the functin needs should be passed to function and dthe listners should be applied to 
//function itslef.
function findpattern(files, regex) {
    const emmitter = new EventEmmitter()
    files.forEach(file => {
        fs.readfile(file, 'utf8', (err, content)=>
        {
            if (err) {
                emmitter.emit("error",err)
            }
            emmitter.emit('fileread', file)
            let match;
            if (match = content.match(regex))
            {
                match.forEach(elem=>emmmitter.emit('found',file,elem))
                }
        })
        
    });
    return emmitter
}
findpattern(filespath, 'pattenr')
    .on('fileread', (file)=>console.log('The file must be read at the beggning'+file))
    .on('found',(file,elem)=> console.log("The file must be found"+file+elem))
    .on('error',(err)=>console.log('there must be an error found in the process'+err))


//ANOTHE VERSION OF THE ABOVE CODE
//FINDPATTERN FUNCTION IS EXTENDED AS AN EMMITER WHICH IS GENERIC TYPE OF THE 
    //FUNCTIONAL EVENT EMMITTER
//In this way it becomes a fully￾fledged observable class.Everything is observable

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
                    return this.emmit("error" + err)
                }
                this.emit('fileread', file)
                let match = null ;
                match = content.match(this.pattern)
                match.forEach(item=>{this.emit('found',file,item)})
            })
        })
        return this  //The emmitter must be returned always with its events
    }
}

//functional
findpattern
    .addFile('the fiel path')
    .addFile("thefiel path again")
    .addFile("tehfiel path") 
    .find()
    .on('fileread', (file) => console.log("Teh fiel is found is " + file))
    .on('found', (match, file) => console.log("The match" + match + "is found in" + file))
    .on('error',err=>console.log("Error Found is :" + err))