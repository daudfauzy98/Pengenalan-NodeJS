const http = require('http')

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('Hello <b>Wrold!</b>')
    res.end("<br>Selesai..")
})

server.listen(8000)

console.log("server running on http://localhost:8000")