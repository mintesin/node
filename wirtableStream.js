const promiseFs = require('fsPromises')
const gzip = require('zlib')
const promisify = promisisfy('util')
const gzipPromise = promisify(gzip)
const filename = process.argv[2]
async function main() {
    const data = await promiseFs.readFile(filename);
    const compressed = await gzipPromise(data)
    await promiseFs.writeFile(`${filename}.gz`,compressed)
    console.log("The file is already compressed")
}

main()