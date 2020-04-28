const http = require('http');
const url = 'http://covid19uttarakhand.org';
http.get(url, (response) => {
    response.on('data', (chunk) => {
        console.log(chunk.toString('utf-8'));
    })
    response.on('end', () => {
        console.log('response has been ended');
    })
}).on('error', (error) => {
    console.log(error);
})