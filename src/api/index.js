

class BookmanDBAPI {
    constructor(password) {
        if (typeof password == "string") {
            this.password = password;
        } else {
            throw new Error("[BookmanDBAPI] Password must be a String");
        }
    }
    set(name, value) {
        return require("./handlers/setValue")(name, value, this.password);
    }
    delete(name) {
        return require("./handlers/deleteValue")(name, this.password);
    }
    get(name) {
        return require("./handlers/getValue")(name, this.password);
    }
    has(name) {
        return require("./handlers/hasValue")(name, this.password);
    }
    map() {
        return require("./handlers/mapDatabase")(this.password);
    }
}

module.exports = BookmanDBAPI;