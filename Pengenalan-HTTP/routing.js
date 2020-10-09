const http = require('http')

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    switch(req.url) {
        case '/about':
            res.write('Ini adalah halaman About')
            break
        case '/product':
            res.write('Ini adalah halaman Product')
            break
        case '/profile':
            res.write('Ini adalah halaman Profile')
            break
        default:
            res.write('404 Halaman tidak ditemukan')
    }
    res.end()
})

server.listen(8000)
console.log("server running at port 8000")