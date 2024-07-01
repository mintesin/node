const fs = require("fs")
const path = require('path')
const superagent = require('superagent')
const { mkdirp } = require('mkdirp')
const urlTofilename = require('./utils') 
const { Console } = require("console")

function saveFile(filename, contents, callback) {
    // Create directory if it doesn't exist
    mkdirp(path.dirname(filename), err => {
        if (err) {
            return callback(err)
        }
        // Write file with provided contents
        fs.writeFile(filename, contents, callback)
    })
}
function download(url, filename, callback) {
    // Log the URL being downloaded
    console.log(`Downloading ${url}`)

    // Use superagent to make a GET request to the URL
    superagent.get(url).end((err, res) => {
        if (err) {
            // If there's an error, call the callback with the error
            return callback(err)
        } else {
            // If there's no error, save the file
            saveFile(filename, res.text, err => {
                if (err) {
                    // If there's an error saving the file, call the callback with the error
                    return callback(err)
                } else {
                    // If there's no error, log the success and call the callback with the response text
                    console.log(`downloaded and saved`)
                    callback(null, res.text)
                }
            })
        }
    })
}
function spider(url, cb) {
    // Convert URL to filename
    const filename = urlTofilename(url)
    // Check if file exists
    fs.access(filename, err => {
        if (err && err.code === 'ENOENT') {
            // File not found, download it
            Console.log("Downloading the file")
            return cb(null, filename, false) 
        }
        // Download file
        download(url, filename, err => {
            if (err) {
                // Error occurred
                return cb(err)
            }
            // Download successful
            cb(null, filename, true)
        })
    })
}