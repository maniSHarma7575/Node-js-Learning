const fs = require('fs');
const path = require('path');
fs.writeFile(path.join(__dirname, '/files/datae.txt'), 'This is beautifully written by me', function(error) {
    if (error) {
        console.log(error);
    }
    console.log('Data written successfully');
})
fs.readFile(path.join(__dirname, '/files/data.txt'), { encoding: 'utf-8' }, function(error, data) {
    if (error) {
        console.log(error);
    }
    console.log(data);
})