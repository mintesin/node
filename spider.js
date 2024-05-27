const spider = require('../../webspider.js')
url = 'https://nodejs.org/api/fs.html'
spider(process.argv[2], (err, filename, downloaded) => {
    if (err) {
        console.error(err.message)
    }
    else if(downloaded) {
        console.log(`The file ${filename} is downloaded`)

    }
    else {
        console.log(`The file ${filename} was already downloaded`)
    }
})