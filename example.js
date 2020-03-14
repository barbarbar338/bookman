/* BookmanDB Packages */
const Bookman = require("bookman");

/* 
 * Creating New Database
 * You can create databases as much as you want
 * Example: const db = new Bookman(DATABASE_NAME);
 * DATABASE_NAME must be a String like "database_name"
 */
const dbMain = new Bookman("database_name");

/*
 * Creating Childs
 * You can create childs as much as you want
 * Example: const child = db.createChild();
 * db must be a BookmanDB Database like "new Bookman(DATABASE_NAME);"
 */
const firstChild = dbMain.createChild();
const secondChild = dbMain.createChild();

/*
 * Setting a value in the database
 * Example: db.set(DATA_NAME, DATA_VALUE);
 * DATA_NAME must be a String like "data" or "data.subdata"
 * DATA_VALUE can be anything like true, false, 10, "data", {}...
 */
dbMain.set("npm_page", "https://www.npmjs.com/package/bookman"); // => "https://www.npmjs.com/package/bookman"
dbMain.set("developers_motto.baris", "lul"); // => { "baris": "lul"}
dbMain.set("developers_motto.murat", "lol"); // => { "murat": "lol"}
dbMain.set("developers_motto.stranger", "who am I?") // => { "stranger": "who am I?"}
dbMain.set("trash_data", "gonna_delete") // => "gonna_delete"
dbMain.set("number_value", 1); // => 1

/*
 * Setting a value in the child
 * Example: child.set(DATA_NAME, DATA_VALUE);
 * DATA_NAME must be a String like "data" or "data.subdata"
 * DATA_VALUE can be anything like true, false, 10, "data", {}...
 */
firstChild.set("module_name", "bookman"); // => "bookman"
firstChild.set("trash_data", "gonna_delete") // => "gonna_delete"
secondChild.set("number_value", 1); // => 1
secondChild.set("module.page", "https://www.npmjs.com/package/bookman") // { "page": "https://www.npmjs.com/package/bookman"}
secondChild.set("module.author", "Barış DEMİRCİ") // => { "author": "Barış Demirci" }

/*
 * Add specified data
 * Example: db.add(DATA_NAME, DATA_VALUE)
 * DATA_NAME must be a String like "data" or "data.subdata"
 * DATA_VALUE can be anything like true, false, 10, "data", {}...
 */
dbMain.add("number_value", 1); // => 2
secondChild.add("number_value", 1); // => 2

/*
 * Deleting a value in the database or child
 * Example: db.delete(DATA_NAME);
 * DATA_NAME must be a String like "data" or "data.subdata"
 */
dbMain.delete("trash_data") // => "gonna_delete" value has been deleted
dbMain.delete("developers_motto.stranger") // => { "stranger": "who am I?"} value has been deleted
firstChild.delete("trash_data") // => "gonna_delete" value has been deleted

/*
 * Fetcing a value in the database or child
 * Example: db.get(DATA_NAME);
 * DATA_NAME must be a String like "data" or "data.subdata"
 */
dbMain.get("npm_page"); // => "https://www.npmjs.com/package/bookman"
dbMain.get("developers_motto"); // => { "baris": "lul", "murat": "lol"}
dbMain.get("developers_motto.baris"); // => "lul"
firstChild.get("module_name") // => "bookman"

/*
 * Check if data created
 * Example: db.has(DATA_NAME)
 * DATA_NAME must be a String like "data" or "data.subdata"
 */
dbMain.has("npm_page"); // => true
dbMain.has("trash_data"); // => false
secondChild.has("module.page") // => true

/* 
 * Mapping data
 * Example: db.map()
 */
dbMain.map(); // => { "npm_page": 'https://www.npmjs.com/package/bookman', "developers_motto": { "baris": 'lul', "murat": 'lol' }, "number_value": 2 }
firstChild.map(); // => { "module_name": "bookman" }
console.log(dbMain.mapChild()) // => [ { "npm_page": 'https://www.npmjs.com/package/bookman', "developers_motto": { "baris": 'lul', "murat": 'lol' } }, { "module_name": 'bookman' }, { "module": { "page": 'https://www.npmjs.com/package/bookman', "author": 'Barış DEMİRCİ' }, "number_value": 2 } ]
