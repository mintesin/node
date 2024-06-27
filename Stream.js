//Stream using pause or non flowing mode
//Stream is pulled by read method
//It uses 'readable' event 
process.stdin
    .on('readable', () => {
        let chunk;
        if ((chunk = process.stdin.read( )) !== null) {
           console.log(`${chunk.length} bytes is ${chunk.toString()}`) 
        }
    })
    .on('end', () => {
        console.log("End of the stream")
    })
//Stream using flowing mode
//It uses the event 'data' in this case
//This where the date is pushed to the data listener
//Not pulled by read method 
process.stdin
    .on('data', (chunk) => {
        console.log('New data is available to read')
        console.log(`${chunk.length} bytes is ${chunk.toString()}`)
    })
    .on('end', () => { console.log('The data is already used and already read') }) 
    
//Using async Operators
async function main() {
    for await (const chunk of process.stdin) {
        console.log("New data is available ")
        console.log(`${chunk.length} bytes is read from ${chunk.toString()}`)
    }
    console.log("End od the stream")
   }