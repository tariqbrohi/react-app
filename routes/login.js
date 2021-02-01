const express = require('express')
const app = express()
var con = require('../db/db')
// Login route
app.get("/login", (req, res) => {
    var auth = true;
    const username = req.query.username;
    var authUsernameQuery = "select * from user where username = '" + username + "'";
    con.query(authUsernameQuery, (err, result) => {
        if (err) {
            console.log("User does not exist!");
            res.send("User does not exist!");
        } else {
            if (result.length < 1) {
                res.send("-1");
                auth = false;
            }

        }
    });
    const password = req.query.password;
    var query = "select * from user where username = '" + username + "' and password = '" + password + "'";
    con.query(query, (err, result) => {
        if (err) {
            console.log(err);
            return;
        } else {
            if (auth) {
                res.send(result);
            }
        }
    });
});