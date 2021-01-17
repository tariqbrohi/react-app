const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());



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

// Login route
app.get("/login", (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    var query = "select * from user where username = '" + username + "' and password = '" + password + "'";
    con.query(query, (err, result) => {
        if (err) {
            console.log(err);
            return;
        } else {
            res.send(result);
        }
    });
});

// Default route
app.get("/", (req, res) => {
    res.send("Not a home page");
});





app.listen(4000, () => {
    console.log('Server started at port 4000');
});