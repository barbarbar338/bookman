module.exports = (name, value, pass) => {
    let json = {
        password: pass,
        name: name,
        value: value
    }
    let result = require("../methods/makeApiRequest")("add", json);
    return require("../methods/checkApiResult")(result);
}