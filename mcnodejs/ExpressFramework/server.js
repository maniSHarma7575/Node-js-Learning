const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send("hello world by manish sharma");
}).listen(3000);