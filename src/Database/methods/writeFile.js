module.exports = (r, o) => {
    try {
        require("fs").writeFileSync(`./${r}`, JSON.stringify(o, null, 4), (r) => {
            if (r) throw new Error("[Bookman DB] " + r + " \n\nFOR MORE ADVANCED HELP: https://discord.com/invite/BjEJFwh");
        });
    } catch (r) {
        throw new Error("[BookmanDB] " + r + " \n\nFOR MORE ADVANCED HELP: https://discord.com/invite/BjEJFwh");
    }
};
