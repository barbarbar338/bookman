module.exports = (result) => {
    result = result.body
    if (result.error) throw new Error("[BookmanDBAPI] " + result.value);
    return result.value; 
}