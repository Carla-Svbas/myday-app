const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Germana12@',
    database: 'myday'
});

module.exports = db;