
"type":"module"




class Logger{
    constructor(name, year) {
        this.name = name;
        this.year = year;
    } 
    getAge() {
        console.log(`The birth year of the student is:${this.year}`)
    }
    getName() {
        console.log(`The name of the student is ${this.name}`)
    }
}
module.exports = Logger
module.exports = 'This is another entity for importing '
// module.exports = {
//     console.log(`The number is ${3}`)
// }


