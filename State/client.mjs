import FailSafeSocket from './failSafe.mjs'

const FailSafeSocket = new FailSafeSocket({ port: 5000 })
setInterval(() => {
    FailSafeSocket.send(process.memoryUsage())
},1000)