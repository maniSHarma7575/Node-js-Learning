const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("hello manish");
});
app.listen(3000); 