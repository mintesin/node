const fs = require('fs')
const path = require('path') 
const mkdirp = require('mkdirp')
const urlToFilename = require('../utils')
const superagent=require('superagent')
function saveFile(filename, contents, callback) {
    // Create directory if it doesn't exist
    mkdirp('/webspider2', err => {
        if (err) {
            return callback(err)
        }
        // Write file with provided contents
        fs.writeFile(filename, contents, callback)
    })
}
// function download(url, filename, callback) {
//     // Log the URL being downloaded
//     console.log(`Downloading ${url}`)

//     // Use superagent to make a GET request to the URL
//     superagent.get(url).end((err, res) => {
//         if (err) {
//             // If there's an error, call the callback with the error
//             return callback(err)
//         } else {
//             // If there's no error, save the file
//             saveFile(filename, res.text, err => {
//                 if (err) {
//                     // If there's an error saving the file, call the callback with the error
//                     return callback(err)
//                 } else {
//                     // If there's no error, log the success and call the callback with the response text
//                     console.log(`downloaded and saved`)
//                     callback(null, res.text)
//                 }
//             })
//         }
//     })
// }
function download(url, filename) {
    console.log(`Downloading the url:${url}`) 
    let content;
    superagent.get(url).then(res => {
        content = res.text;
        return mkdirbPromises(dirname(filename))
    }).then(() => { fsPromises.writeFile(filename, content) })
    .then(()=>{console.log(`Download the nd saved :${url}`)})
    return content;
}
function spider(url, nesting, callback) {
    const filename = urlToFilename(url)
    fs.readFile(filename, 'utf8', (err, filecontent) => {
        if (err) {
            if (err.code !== 'ENOENT') {
                return callback(err)
            }
            return download(url, (err, requestContent) => {
                if (err) {
                    return callback(err)
                }
                spiderLinks(url, requestContent, nesting, callback)
            })
        }
       spiderLinks(url,filecontent,nesting,callback) 
    })
} 

function spiderLinks(currentURL, body, nesting, callback) {
    //Checking the length of nesting synchronously
    //Making it on top of event que using process.nexTick()
    
    if (nesting === 0) {
       return process.nextTick(callback)
    }
    //
    const links = getPageLinks(currentURL, body)
    if (links.length === 0) {
        return process.nextTick(cb)
    }

    function iterate(index) {
        if (index === links.length) {
          return callback()
      
    } 
    spider(links[index], nesting - 1, function (err) {
        if (err) {
            return callback(err)
        }
        iterate(index+1)
    })
}
iterate(0) 
}    

module.exports=spider 