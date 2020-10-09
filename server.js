const http = require('http')

const server = http.createServer(function(req, res) {
    res.end("Hi, selamat datang di Node.js")
})

server.listen(8000)

console.log("server running on http://localhost:8000")