const http = require('https');
const url = 'https://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt'

http.get(url, (response) => {
    let rawdata = '';
    response.on('data', (chunk) => {
        rawdata += chunk
    });
    response.on('end', () => {
        try {
            const parseData = JSON.parse(rawdata);
            console.log(parseData);

        } catch (e) {
            console.log("error ".e);
        }
    })
}).on('error', (error) => {
    console.log("error".error);
})