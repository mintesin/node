const { Readable } = require('stream')

const  mountains = [
{ name: 'Everest', height: 8848 },
{ name: 'K2', height: 8611 },
{ name: 'Kangchenjunga', height: 8586 },
{ name: 'Lhotse', height: 8516 },
{ name: 'Makalu', height: 8481 }
] 

const arrayStream = Readable.from(mountains)
arrayStream.on('data', item => {
    console.log(`${item.name}  and ${item.height}`)
})