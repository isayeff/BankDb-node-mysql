const mysql = require('mysql2/promise')

const mySqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'elvin2004',
    database: 'bank_db',
})

module.exports = mySqlPool