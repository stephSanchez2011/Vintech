const users = require('./user.json');
const sql = require('better-sqlite3');
const db = sql('vindtec.db');

db.prepare(`
   CREATE TABLE IF NOT EXISTS user (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL UNIQUE,
       job TEXT NOT NULL,
       image TEXT NOT NULL,
       birthDate TEXT NOT NULL,
       phone TEXT NOT NULL,
       email TEXT NOT NULL
    )
`).run();

db.prepare(`
   CREATE TABLE IF NOT EXISTS ticket (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       title TEXT NOT NULL UNIQUE,
       createdAt TEXT NOT NULL,
       doneAt TEXT NOT NULL
    )
`).run();

async function initData() {
    const stmt = db.prepare(`
      INSERT INTO user VALUES (
         null,
         @name,
         @job,
         @image,
         @birthDate,
         @phone,
         @email
      )
   `);

    for (const user of users) {
        stmt.run(user);
    }
}

initData();