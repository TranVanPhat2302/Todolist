const mysql = require('mysql');


const config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'phat2302',
    database: 'tododb',
};

const qb = mysql.createConnection(config);
module.exports = qb;