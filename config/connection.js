const mysql = require('mysql2')

const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'company_db'
    },
    console.log('Connected to the company database.')
);

module.exports = db;