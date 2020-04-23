const fs = require("fs");
const fileName = "demp.txt";
fs.readFile(fileName, (err, data) => {
    if (err) {
        console.log(err);
    }
    if (data) {
        console.log(data.toString());
    }
});
console.log("Node js Programming");