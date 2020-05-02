const http = require('http')
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')
const downloadPage = (url = 'http://nodeprogram.com') => {
    console.log(`downloading url: ${url}`)
    const fetchPage = (urlf, callback) => {
        http.get(urlf, (response) => {
            let buff = ''
            response.on('data', (chunk) => {
                buff += chunk
            })
            response.on('end', () => {
                callback(null, buff)
            })
        }).on('error', (e) => {
            console.log(`error message: ${e}`)
            callback(e)
        })

    }
    const folderName = uuidv1()
    fs.mkdirSync(folderName)
    fetchPage(url, (error, data) => {
        fs.writeFileSync(path.join(__dirname, folderName, 'file.html'), data)
        console.log('downloading is done in folder', folderName)
    })
}
downloadPage(process.argv[2]);