const http = require('http')


const server=http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'html' })
    res.write('<h2>Hello ther this is the server you are accessing right now </h2>')
    res.end()
    res.on('finish',()=>{'The server has completed writing everything.'})
})

server.listen(8080, () => { console.log('listening on http://localhost:8080') })
