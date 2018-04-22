const express = require("express");
const jasonParser = require('body-parser').json();
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.get('/', (req, res) => res.send("hihi"));

app.post('/signin', jasonParser, (req, res) => res.send(req.body));

app.listen(3000,function(){
    console.log("server dang chay"); 
});
// var control = require("./Control/control.js");
// control.route(app);