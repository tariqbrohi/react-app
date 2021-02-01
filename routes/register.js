var express = require('express')
var app = express();
var con = require('../db/db')
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
            // console.log(err);
            res.send("no");
            auth = false;
        }
        // User is saved in database
        var hashedUsername = bcrypt.hashSync(req.body.username, 8);
        var privateKey = fs.readFileSync('private.key');
        var token = jwt.sign(hashedUsername, config.secret, {
            expiresIn: 1000 // expires in 24 hours
        });
    })
    if (auth) {
        res.sendStatus(200);
    }
})
