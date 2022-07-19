[![stars](https://img.shields.io/github/stars/barbarbar338/bookman?color=yellow&logo=github&style=for-the-badge)](https://github.com/barbarbar338/bookman)
[![license](https://img.shields.io/github/license/barbarbar338/bookman?logo=github&style=for-the-badge)](https://github.com/barbarbar338/bookman)
[![supportServer](https://img.shields.io/discord/711995199945179187?color=7289DA&label=Support&logo=discord&style=for-the-badge)](https://discord.gg/BjEJFwh)
[![forks](https://img.shields.io/github/forks/barbarbar338/bookman?color=green&logo=github&style=for-the-badge)](https://github.com/barbarbar338/bookman)
[![issues](https://img.shields.io/github/issues/barbarbar338/bookman?color=red&logo=github&style=for-the-badge)](https://github.com/barbarbar338/bookman)

<p align="center">
  <img src="https://raw.githubusercontent.com/barbarbar338/readme-template/main/icon.png" alt="Logo" width="160" height="160" />
  <h3 align="center">BookmanDB</h3>

  <p align="center">
    An Easy-To-Use JSON Database
    <br />
    <a href="https://discord.gg/BjEJFwh"><strong>Get support »</strong></a>
    <br />
    <br />
    <a href="https://github.com/barbarbar338/bookman/issues">Report Bug</a>
    ·
    <a href="https://github.com/barbarbar338/bookman/issues">Request Feature</a>
    ·
    <a href="https://barbarbar338.fly.dev">Some link</a>
  </p>
</p>

# ✨ BookmanDB: An Easy-To-Use JSON Database

-   <b>BookmanDB</b> is a very easy to use and easily editable JSON database module that allows you to create unlimited amount of unique database files!
-   <b>BookmanDB</b> also saves your data in a json file so you can access and edit simple files at any time.

# 📦 Installation

-   Using yarn: `yarn add bookman`
-   Using npm: `npm i bookman`

# 🤓 Usage

```js
/* BookmanDB Files */
const { Database, FSAdapter } = require("bookman");
/* Creating New Database */
const fsAdapter = new FSAdapter({
	defaultDir: "database",
	databaseName: "mydb",
});
const db = new Database(fsAdapter);

/* Setting a value in the database */
db.set("just.a.long.data.name", "Bookman is cool!"); // => "Bookman is cool!"
db.set("just.a.long.array", []); // => []
db.set("just.a.long.number", 1); // => 1

/* Getting a value in the database */
db.get("just.a.long.data"); // => { name: "Bookman is cool!" }
db.fetch("just.a.long.number"); // => 1

/* Check if data created */
db.has("just.a.long"); // => true
db.has("just.a.long.name"); // => false

/* Add specified data */
db.add("just.a.long.number", 1); // => 2
db.add("just.a.long.number", 5); // => 7

/* Subtract specified data */
db.subtract("just.a.long.number", 1); // => 6
db.subtract("just.a.long.number", 3); // => 3

/* Push specified data */
db.push("just.a.long.array", 2); // => [2]
db.push("just.a.long.array", null); // => [2, null, 3, "str1", {}]
db.push("just.a.long.array", 3); // => [2, null, 3]
db.push("just.a.long.array", "str1"); // => [2, null, 3, "str1"]
db.push("just.a.long.array", {}); // => [2, null, 3, "str1", {}]

/* Pop specified data */
db.pop("just.a.long.array"); // => [2, null, 3, "str1"]

/* Shift specified data */
db.shift("just.a.long.array"); // => [null, 3, "str1"]

/* Unshift specified data */
db.unshift("just.a.long.array", 5); // => [5, null, 3, "str1"]

/* Mapping data */
db.map(); // =>  { just: { a: { long: [Object] } } }

/* Deleting a value in the database */
db.delete("just.a.long"); // => { just: { a: { long: [Object] } } } has been deleted

/* Destroying database */
db.destroy(); // true
```

# 📄 License

Copyright © 2021 [Barış DEMİRCİ](https://github.com/barbarbar338).

Distributed under the [MIT](https://mit-license.org/) License. See `LICENSE` for more information.

# 🧦 Contributing

Fell free to use GitHub's features.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/my-feature`)
3. Run prettier and eslint (`npm run format && npm run lint`)
4. Commit your Changes (`git commit -m 'my awesome feature my-feature'`)
5. Push to the Branch (`git push origin feature/my-feature`)
6. Open a Pull Request

# 🔥 Show your support

Give a ⭐️ if this project helped you!

# 📞 Contact

-   Mail: demirci.baris38@gmail.com
-   Discord: https://discord.gg/BjEJFwh
-   Instagram: https://www.instagram.com/ben_baris.d/
