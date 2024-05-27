const { Console } = require("console");
const { resolve } = require("path");

function intro(name) {
    return new Promise((resolve, reject) => {
        (setTimeout(() => {
            resolve(`Hello My name is ${name}.`)
        }),
            setTimeout(() => {
                reject(`My name is not ${name}`)
            })
    )
    },1000)
} 

Console.log("My name is mintesinot Aragw")
intro('Minteisnot')