module.exports = (name, pass) => {
    let json = {
        password: pass,
        name: name
    }
    let result = require("../methods/makeApiRequest")("get", json);
    return require("../methods/checkApiResult")(result);
}