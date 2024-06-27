const fs = require('fs')

const createGzip = require('zlib')

const filename = process.argv[2]
fs.createReadStream(filename).pipe(createGzip.createGzip())
    .pipe(fs.createWriteStream(`${filename}.gz`))
    .on('finish',()=>{console.log("File compression is completed")})0