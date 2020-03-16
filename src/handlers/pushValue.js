const fs = require("fs");
const writeFile = require("../methods/writeFile");
module.exports = (name, value, id, fileName) => {
    try {
        var file = JSON.parse(fs.readFileSync(`./${fileName}`, "utf8"));
        if (!name || name == null) throw new Error("[Bookman DB] data name must be a string like 'data.subdata'");
        name = name.split(".");
        if (!name[0] || name[0] == null) throw new Error("[Bookman DB] data name must be a string like 'data.subdata'");
        if (!value || (!Array.isArray(value) && typeof value != "string")) throw new Error("[BookmanDB] value must be a string or array");
        let arr = [];
        if (Array.isArray(value)) for (let i of value) arr.push(i);
        else arr = [value];
        if (!file[id][name[0]]) {
            if (!name[1]) {
                file[0][name[0]] = arr;
                writeFile(fileName, file);
            } else if (name[1]) {
                file[id][name[0]] = {
                    [name[1]]: arr
                }
                writeFile(fileName, file);
            }
        } else if (!name[1] && file[id][name[0]]) {
            let val = file[id][name[0]];
            if (Array.isArray(val))for (let i of val) arr.push(i);
            else if (typeof val == "string") arr.push(val);
            else throw new Error("[BookmanDB] The data you push should be an array or string");
            file[id][name[0]] = arr;
            writeFile(fileName, file);
        } else if (name[1] && !file[id][name[0]][name[1]]) {
            file[id][name[0]][name[1]] = arr;
            writeFile(fileName, file);
        } else if (name[1] && file[id][name[0]][name[1]]) {
            let val = Array(file[id][name[0]][name[1]])
            if (Array.isArray(val))for (let i of val) arr.push(i);
            else if (typeof val == "string") arr.push(val);
            else throw new Error("[BookmanDB] The data you push should be an array or string");
            file[id][name[0]][name[1]] = arr;
            writeFile(fileName, file);
        }
    } catch (err) {
        throw new Error("[Bookman DB] " + err);
    }
}