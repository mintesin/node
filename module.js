class logger {

    constructor(name) {
        this.name = name;
    }
    
    log(message) {
        console.log(`info,${message}`)
    }

    info(message) {
        this.log(`verbose:${message}`)

    }
    _addition(message) {
        console.log(`This is totally wrong about the way we go forward specially about ${message}`)
    }
    Logger(name) {
    if (!new.target) {
        return new Logger(name);
    }
    this.name = name;
}

}
module.exports = { logger };
