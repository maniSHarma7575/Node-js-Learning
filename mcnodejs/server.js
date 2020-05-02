const http = require('http')
const port = 3000
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end("Hello world")

}).listen(port)
console.log(`server started at http://localhost/${port}`)