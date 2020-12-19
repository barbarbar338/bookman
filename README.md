# BookmanDB: An Easy-To-Use Database

<p><b>BookmanDB</b> is a very easy to use and easily editable database module that allows you to create unlimited amount of unique database files and database childs!</p>
<p><b>BookmanDB</b> also saves your data in a json file so you can access and edit simple files at any time.</p>

## <b>[Discord: https://discord.com/invite/BjEJFwh](https://discord.com/invite/BjEJFwh)</b>

## <b>[NPM Page](https://www.npmjs.com/package/bookman) [GITHUB Page](https://github.com/barbarbar338/bookman)</b>

## Usage

<p>Here is a simple but effective example!</p>

```js
/* BookmanDB Files */
const { Database } = require("bookman");
/* Creating New Database */
const db = new Database("DatabaseName");

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

<p>It looks so scary right :D Don't worry you dont have to know all of these xd</p>

## [Contact Me For More Help](https://www.is-my.fun/ulas)

\ ゜ o ゜)ノ
