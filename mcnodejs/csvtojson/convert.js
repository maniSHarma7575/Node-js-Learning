const path = require('path');
const fs = require('fs');
const csvfilepath = path.join(__dirname, 'customer-data.csv');
const csv = require('csvtojson');
csv().fromFile(csvfilepath).then((jsonObj) => {

    var jsonContent = JSON.stringify(jsonObj);
    console.log(jsonContent);
    fs.writeFile(path.join(__dirname, 'customer-data.json'), jsonContent, function(error) {
        if (error) {
            console.log(error);
        }
        console.log('Data written successfully');
    })
})