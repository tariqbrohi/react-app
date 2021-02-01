const mysql = require('mysql');
// Creating connection to SQL
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tariq143",
    database: 'mydb'
});

con.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Database connected!!!');
});

module.exports = con;