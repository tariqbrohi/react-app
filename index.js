const express = require('express');
const app = express();
const cors = require('cors');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var con = require('./db/db')
var login = require('./routes/login')
var register = require('./routes/register')
app.use(cors());

app.get("/api/token/verify", (req, res) => {
    const token = req.query.token;
    try {
        const decode = jwt.verify(token, 'shhhhh');
        console.log(decode);
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(404);
    }
});

app.get("/login", (req, res) => {
    var auth = true;
    const username = req.query.username;
    var authUsernameQuery = "select * from user where username = '" + username + "'";
    con.query(authUsernameQuery, (err, result) => {
        if (err) {
            console.log("User does not exist!");
            res.sendStatus(401).send("User Does not exist");
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


app.get('/register', (req, res) => {
    const auth = true;
    const name = req.query.name;
    const address = req.query.address;
    const age = req.query.age;
    const email = req.query.email;
    const username = req.query.username;
    const password = req.query.password;
    const query = "Insert into users (name, address, age, email, username, passwrod) VALUES ?";
    const values = [
        [name, address, age, email, username, password]
    ];
    con.query(query, [values], function (err, res) {
        if (err) {
            console.log(err);
            auth = false;
        }
    })
    if (auth) {
        // User is saved in database
        // var hashedUsername = bcrypt.hashSync(username, 8);
        // currentHashedUser = bcrypt.hashSync(username, 8);
        var token = jwt.sign({ user: username }, "shhhhh", {expiresIn: 3600});
        console.log(token);
        res.send(token);
    } else {
        res.sendStatus(401);
    }
})








// Default route
app.get("/", (req, res) => {
    res.send("Not a home page");
});





app.listen(4000, () => {
    console.log('Server started at port 4000');
});