var mysql = require('mysql');
var database= function() {
    this.create=mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "internship_web",
    })
}
module.exports = database;