const mysql = require('mysql2');


//Connect to dabatabase
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL username,
        user: 'root',
        //Your MySQL passwrod
        password: 'BootSQL#2021',
        database: 'election'
    },
    console.log('Connected to the election database.')
);






module.exports = db;