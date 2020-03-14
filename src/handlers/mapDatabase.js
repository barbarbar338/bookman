const fs = require("fs");
module.exports = (id, fileName) => {
    var file = JSON.parse(fs.readFileSync(`./${fileName}`, "utf8"));
    return file[id];
}

