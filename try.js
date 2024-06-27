// const person = {}
// person.name = 'minteisnot'
// person.age = 23;
// person.school = 'IU hochschule'

// console.log(person)
// console.log(person.name)

const person = new Object()
person.name = 'chen'
person.age = 34
person.clue = 45

// console.log(person)
// console.log(person['clue']) 
person.fullname = function () {
    return this.name + ' is ' + this.age
}


Object.keys(person).forEach(element => {
    console.log(element)
});
console.log('##############################')
Object.values(person).forEach(element => {
    console.log(element)
})
console.log('##############################')

Object.entries(person).forEach(element => {
    console.log(element)
})
