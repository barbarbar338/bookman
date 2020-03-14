const fs = require("fs");
module.exports = (name, id, fileName) => {
    var file = JSON.parse(fs.readFileSync(`./${fileName}`, "utf8"));
    if (!name || name == null) throw new Error("[Bookman DB] data name must be a string like 'data.subdata'");
    name = name.split(".");
    if (!name[0] || name[0] == null) throw new Error("[Bookman DB] data name must be a string like 'data.subdata'");
    if (!file[id][name[0]]) return null;
    if (!name[1]) {
        return file[id][name[0]];
    } else {
        if (!file[id][name[0]][name[1]]) return null;
        return file[id][name[0]][name[1]];
    }
}