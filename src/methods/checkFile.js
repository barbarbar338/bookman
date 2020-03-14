const fs = require("fs");
const writeFile = require("./writeFile");
module.exports = (id, fileName) => {
    try {
        var file = JSON.parse(fs.readFileSync(`./${fileName}`, "utf8"));
        if (!file[id]) {
            file[id] = {};
            writeFile(fileName, file);
        }
    } catch (e) {
        try {
            fs.createWriteStream(`./${fileName}`);
            const file = [{}];
            writeFile(fileName, file);
        } catch (err) {
            throw new Error("[Bookman DB] " + err);
        }
    }
}