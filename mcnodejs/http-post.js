const http = require('http');
const postData = JSON.stringify({ foo: 'bar' })
const options = {
    hostname: 'mockbin.com',
    port: 80,
    path: '/request?foo=bar&foo=baz',
    method: 'post',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
}

const req = http.request(options, (res) => {
    res.on('data', (chunk) => {
        console.log(`Body: ${chunk}`);
    })
    res.on('end', () => {
        console.log("data processing done");
    })
})
req.on('error', (e) => {
    console.log(`error: ${e}`);
})
req.write(postData);
req.end();