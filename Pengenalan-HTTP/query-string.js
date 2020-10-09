const http = require('http')
const url = require('url')

/*const server = http.createServer(function(req, res) {
    const katakunci = url.parse(req.url, true).query
    console.log(katakunci)
    res.write('Success')
    res.end()
})*/

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    const katakunci = url.parse(req.url, true).query
    const response = 'keyword: ' + katakunci.keyword + 'hari: '
    res.write(response)
    res.end()
})

server.listen(8000)

console.log("server running at port 8000")