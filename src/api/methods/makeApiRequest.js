const request = require('syncrequest');
module.exports = (path, json) => {
    let result = request.post.sync(`http://db.is-my.fun/${path}`, {
        json: json
    });
    return result;
}