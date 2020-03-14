const fs = require("fs");
module.exports = (fileName, file) => {
    fs.writeFileSync(`./${fileName}`, JSON.stringify(file, null, 4), err => {
        if (err) throw new Error("[Bookman DB] " + err);
    });
}