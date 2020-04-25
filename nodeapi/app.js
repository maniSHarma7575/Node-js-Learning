const express = require('express');
const app = express();
const postRoutes = require('./routes/post');
const morgan = require('morgan');
// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
dotenv.config()

//db connection
mongoose.connect(
        process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

//middleware
app.use(morgan('dev'));

app.use('/', postRoutes);
const port = 8000;
app.listen(port, () => {
    console.log(`A node js api is listening on port ${port}`);
});