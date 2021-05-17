# BookmanDB: An Easy-To-Use Database

<p><b>BookmanDB</b> is a very easy to use and easily editable database module that allows you to create unlimited amount of unique database files!</p>
<p><b>BookmanDB</b> also saves your data in a json file so you can access and edit simple files at any time.</p>

## <b>[Discord: https://discord.com/invite/BjEJFwh](https://discord.com/invite/BjEJFwh)</b>

## Usage

<p>Here is a simple but effective example!</p>

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

# All adapters:

```js
const { MongoDBAdapter, FSAdapter, RedisAdapter } = require("bookman");

// FS Example
const fs_adapter = new FSAdapter({
	defaultDir: "database",
	databaseName: "mydb",
});
const fs_db = new Database(fsAdapter);

// MongoDB Example
const mongo_adapter = new MongoDBAdapter({
	defaultDir: "database",
	databaseName: "mydb",
	mongodbURL: "YOUR_MONGODB_CONNECTION_URI",
});
const mongo_db = new Database(mongo_adapter);

// Redis Example
const redis_adapter = new RedisAdapter(
	{
		defaultDir: "database",
		databaseName: "mydb",
	},
	// these lines are optional for redis client, see https://www.npmjs.com/package/redis#rediscreateclient
	{
		host: "127.0.0.1",
		port: "6379",
	},
);
const redis_db = new Database(redis_adapter);
```

## [Contact Me For More Help](https://www.is-my.fun/ulas)

\ ゜ o ゜)ノ
