const request = require('syncrequest');
module.exports = (name, value, pass) => {
    var result = request.get.sync(`http://db.is-my.fun/${pass}/set/${name}/${value}`);
    result = JSON.parse(result.body);
    if (result.error) throw new Error("[BookmanDBAPI] " + result.value);
    return result.value;
}