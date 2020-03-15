BookmanDB: An Easy-To-Use Database 
======

<p><b>BookmanDB</b> is a very easy to use and easily editable database module that allows you to create unlimited amount of unique database files and database childs!</p>
<p><b>BookmanDB</b> also saves your data in a json file so you can access and edit simple files at any time.</p>
<p><b>BookmanDB</b> even offers you an API system! Read the API tab below for more information</p>
<b>[NPM Page](https://www.npmjs.com/package/bookman)</b>
-------

Usage
------------
<p>Here is a simple but effective example!</p>

```js
/* BookmanDB Packages */
const Bookman = require("bookman");
/* Creating New Database */
const db = new Bookman("saveFile_name");
/* Setting a value in the database */
db.set("trash_data", "gonna_delete"); // => "gonna_delete"
/* Fetcing a value in the database */
db.get("trash_data"); // => "gonna_delete"
/* Check if data created */
db.has("trash_data"); // => true
/* Add specified data */
db.add("number_data", 1) // => 1
db.add("number_data", 1) // => 2
/* Mapping data */
db.map(); // =>  { "trash_data": "gonna_delete"}
/* Deleting a value in the database */
db.delete("trash_data"); // => "gonna_delete" has been deleted
```

<p>Isn't it so simple? Let's examine it in a little more detail now</p>

```js
/* BookmanDB Packages */
const Bookman = require("./Bookman");

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
dbMain.mapChild(); // => [ { "npm_page": 'https://www.npmjs.com/package/bookman', "developers_motto": { "baris": 'lul', "murat": 'lol' } }, { "module_name": 'bookman' }, { "module": { "page": 'https://www.npmjs.com/package/bookman', "author": 'Barış DEMİRCİ' }, "number_value": 2 } ]
```

API System
---
<p>In addition, the <b>BookmanDB</b> module offers you an API system.</p>
<p>Here is a simple but effective example!</p>

```js
/* BookmanDB Packages */
const Bookman = require("bookman");
/* Creating New Database */
const db = new Bookman.API("SERVER_TEST_PASSWORD");
/* Setting a value in the database API */
db.set("trash_data", "gonna_delete"); // => "gonna_delete"
/* Fetcing a value in the database API */
db.get("trash_data"); // => "gonna_delete"
/* Check if data created in API */
db.has("trash_data"); // => true
/* Mapping data */
db.map(); // =>  { "trash_data": "gonna_delete"}
/* Deleting a value in the database API */
db.delete("trash_data"); // => "gonna_delete" has been deleted
```

<p>Isn't it so simple? Let's examine it in a little more detail now</p>

```js
/* API SYSTEM */
/*
 * Creatin Database API
 * Example: const db = new Bookman.API(PASSWORD);
 * PASSWORD must be a String like "SERVER_TEST_PASSWORD"
 * NOTE: Everyone's password is unique to him. 
 * Please contact me for a password and please don't give your password to others
 * Anyone who has your password will be able to access your data.
 * You can use the following password for testing ("SERVER_TEST_PASSWORD")
 */
const APIdb = new Bookman.API("SERVER_TEST_PASSWORD")

/* Setting a value in the database API
 * Example: db.set(DATA_NAME, DATA_VALUE);
 * DATA_NAME must be a String like "data" or "data.subdata"
 * DATA_VALUE can be anything like true, false, 10, "data", {}...
*/
APIdb.set("trash_data", "gonna_delete"); // => "gonna_delete"

/*
 * Deleting a value in the database API
 * Example: db.delete(DATA_NAME);
 * DATA_NAME must be a String like "data" or "data.subdata"
 */
APIdb.delete("trash_data"); // => "gonna_delete" has ben deleted

/*
 * Fetcing a value in the database API
 * Example: db.get(DATA_NAME);
 * DATA_NAME must be a String like "data" or "data.subdata"
 */
APIdb.get("trash_data"); // => "gonna_delete"

/*
 * Check if data created in API
 * Example: db.has(DATA_NAME)
 * DATA_NAME must be a String like "data" or "data.subdata"
 */
APIdb.has("trash_data"); // => true

/* 
 * Mapping data
 * Example: db.map()
 */
APIdb.map(); // => { "trash_data": "gonna_delete" }
```

<p>It looks so scary right :D Don't worry you dont have to use all of these xd</p>

[Contact Me For More Help](https://www.is-my.fun/ulas)
-------------------

\ ゜o゜)ノ