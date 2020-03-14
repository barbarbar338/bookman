const fs = require("fs");
const writeFile = require("../methods/writeFile");
module.exports = (name, id, fileName) => {
    var file = JSON.parse(fs.readFileSync(`./${fileName}`, "utf8"));
    if (!name || name == null) throw new Error("[Bookman DB] data name must be a string like 'data.subdata'");
    name = name.split(".");
    if (!name[0] || name[0] == null) throw new Error("[Bookman DB] Please specify a dataname to delete like 'data'");
    if (!file[id][name[0]]) return console.log("[Bookman DB] (this is not an error) the data that you trying to delete is not found");
    if (name[1]) {
        if (!file[id][name[0]][name[1]]) return console.log("[Bookman DB] (this is not an error) the data that you trying to delete is not found");
        delete file[id][name[0]][name[1]];
        writeFile(fileName, file);
    } else {
        delete file[id][name[0]];
        writeFile(fileName, file);
    }
}