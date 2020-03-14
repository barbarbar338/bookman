const fs = require("fs");
const writeFile = require("../methods/writeFile");
module.exports = (name, value, id, fileName) => {
    try {
        var file = JSON.parse(fs.readFileSync(`./${fileName}`, "utf8"));
        if (!name || name == null) throw new Error("[Bookman DB] data name must be a string like 'data.subdata'");
        name = name.split(".");
        if (!name[0] || name[0] == null) throw new Error("[Bookman DB] data name must be a string like 'data.subdata'");
        if (!file[id][name[0]]) {
            if (!name[1]) {
                file[id][name[0]] = (value ||null);
                writeFile(fileName, file);
            } else if (name[1]) {
                file[id][name[0]] = {
                    [name[1]]: (value ||null)
                }
                writeFile(fileName, file);
            }
        } else if (name[1] && !file[id][name[0]][name[1]]) {
            file[id][name[0]][name[1]] = value;
            writeFile(fileName, file);
        } else if (name[1] && file[id][name[0]][name[1]]) {
            file[id][name[0]][name[1]] = value;
            writeFile(fileName, file);
        }
    } catch (err) {
        throw new Error("[Bookman DB] " + err);
    }
}