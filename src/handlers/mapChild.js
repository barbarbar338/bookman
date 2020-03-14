const fs = require("fs");
module.exports = (fileName) => {
    var file = JSON.parse(fs.readFileSync(`./${fileName}`, "utf8"));
    return file;
}

