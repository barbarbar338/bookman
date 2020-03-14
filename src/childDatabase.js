class childBookmanDB {
    constructor(parent) {
        this.parent = parent;
        this.fileName = parent.fileName;
        parent.childCount++;
        this.id = parent.childCount;
        require("./methods/checkFile")(this.id, this.fileName);
    }
    set(name, value) {
        return require("./handlers/setValue")(name, value, this.id, this.fileName);
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
    map() {
        return require("./handlers/mapDatabase")(this.id, this.fileName);
    }
}

module.exports = childBookmanDB;