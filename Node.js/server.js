const http = require('http');
const server = http.createServer((req, res) => {
    res.end("hello world from Nodemon server ");
});
server.listen(3000);