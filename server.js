const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

// add Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


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
// return all the data in the candidates table
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// // get test route 
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello Wrold!'
//     });
// });







//Default response for any other user request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});