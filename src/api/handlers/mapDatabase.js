module.exports = (pass) => {
    let json = {
        password: pass,
    }
    let result = require("../methods/makeApiRequest")("map", json);
    return require("../methods/checkApiResult")(result);
}