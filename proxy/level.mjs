// Export a function to subscribe to levelDB events 
export function levelSubscribe(db) {
    // Add a subscribe method to the db object
    db.subscribe = (pattern, listener) => {
        // Listen for 'put' events on the db 
        db.on('put', (key, val) => {
            // Check if the newly put value matches the given pattern
            const match = Object.keys(pattern).every(
                k => pattern[k] === val[k]
            ) 
            // If the pattern matches, call the listener with the key and value
            if (match) {
                listener(key, val)
            }
        })
    } 
    return db 
}