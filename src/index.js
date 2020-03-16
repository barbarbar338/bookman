const ChildBookmanDB = require("./childDatabase");

class BookmanDB {
    constructor(fileName) {
        this.childCount = 0;
        this.id = 0;
        if (!fileName) {
            this.fileName = "bookman.json";
        } else {
            if (!fileName.endsWith(".json")) {
                this.fileName = `${fileName}.json`;
            } else {
                this.fileName= fileName;
            }
        }
        require("./methods/checkFile")(this.id, this.fileName);
    }
    set(name, value) {
        return require("./handlers/setValue")(name, value, this.id, this.fileName);
    }
    push(name, value) {
        return require("./handlers/pushValue")(name, value, this.id, this.fileName);
    }
    delete(name) {
        return require("./handlers/deleteValue")(name, this.id, this.fileName);
    }
    get(name) {
        return require("./handlers/getValue")(name, this.id, this.fileName);
    }
    has(name) {
        return require("./handlers/hasValue")(name, this.id, this.fileName);
    }
    add(name, value) {
        return require("./handlers/addToValue")(name, value, this.id, this.fileName);
    }
    map() {
        return require("./handlers/mapDatabase")(this.id, this.fileName);
    }
    createChild() {
        return new ChildBookmanDB(this);
    }
    mapChild() {
        return require("./handlers/mapChild")(this.fileName);
    }
}
module.exports = BookmanDB;