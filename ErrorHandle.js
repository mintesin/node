//Combining how both sysnchronous throw and
//asynchrounous async can be combined together
async function palyingWithErrors(throwSyncError) {
    try {
        if (throwSyncError) {
            throw new Error(throwSyncError)
            //If we want to return the error generated locally here
            //to the caller of this function we can write it as follows
                    //return await delay(Error)
        }
    }
    catch (err) {
        console.error(`We have an error:${err.message}`)
    }
    finally{
        console.Finally('Done')
    }
} 