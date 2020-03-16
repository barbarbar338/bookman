module.exports = (name, pass) => {
    let json = {
        password: pass,
        name: name
    }
    let result = require("../methods/makeApiRequest")("has", json);
    return require("../methods/checkApiResult")(result);
}