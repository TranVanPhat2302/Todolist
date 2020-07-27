const mysql = require('mysql');


const config = {
    // host: 'localhost',
    // port: 3306,
    // user: 'root',
    // password: 'phat2302',
    // database: 'tododb',
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'bb19d796945073',
    password: '29b7e1bd',
    database: 'heroku_3fcdee9ce19be88',
};

const configheroku = {
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'bb19d796945073',
    password: '29b7e1bd',
    database: 'heroku_3fcdee9ce19be88',
};

const qb = mysql.createConnection(config );
module.exports = qb;