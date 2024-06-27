// const { protocols } = require("superagent")
// const { setProtocol } = require("superagent/lib/node/http2wrapper")
/* jshint esversion: 6 */
class  Url{
    constructor(
        protocol,
        username,
        password,
        hostname,
        port,
        pathname,
        search,
        hash) {
        this.protocol = protocol
        this.username = username
        this.password = password
        this.hostname = hostname
        this.port = port;
        this.pathname = pathname
        this.search = search
        this.hash = hash;
        
    }

    validate()
{
    if (!this.protocol || !this.hostname || this.pathname) {
        throw new Error("Must be one of the prototcols above given")
     
    }
}
    to_string() {
        let url = ''
        
url += `${this.protocol}://`
if (this.username && this.password) {
url += `${this.username}:${this.password}@`
}
url += this.hostname
if (this.port) {
url += this.port
}
if (this.pathname) {
url += this.pathname
}
if (this.search) {
url += `?${this.search}`
        }
        if (this.hash) {
url += `#${this.hash}`
}
return url
}
}
class urlBuilder {
    setProtocol(protocols) {
        return this.protocol = protocols
        
    }
    setAuthentication(username, password) {
        this.username = username
        this.password = password
        return this
    }
    setHostname(hostaname) {
        this.hostname = hostaname
        return this
    }
    setPort(port) {
        this.port = port
        return this

    }
    setPathname(pathname) {
        this.pathname = pathname
        return this
    }
    setSearch(search)
    {
        this.search = search 
        return this 
    }
    setHash(hash) {
        this.hash = hash
        return this
    }

    build(){
    return new Url(
        this.protocol,
        this.usename,
        this.password,
        this.hostname,
        this.port,
        this.pathname,
        this.search,
        this.hash
     )
    }
}

const url = new urlBuilder()
url.setProtocol('https')
    .setHostname('www.google.com')
    .setPort('80')
    .setPathname('/index.html')
    .setSearch('q=node.js')
    .setHash('MD5')
    .build()

