const sql = require('better-sqlite3')
const db = sql('vindtec.db');

export function getUser (req) {
    return db.prepare('SELECT * FROM user').all();
}