var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test_user",
});


module.exports = {
    isUser: function (username, password) {
        con.connect(function (err) {
            if (err) return false;
            console.log("Connected!");            
        })      
        con.query("SELECT * FROM user WHERE username ="+ username, function (err, result, fields) {
            if(result == undefined){
                console.log("user khong ton tai");
                return false;
            }else{
                if(result[0].password==password){
                    console.log("dang nhap thanh cong");
                    return true;
                }else{
                    console.log("sai mat khau");
                    return false;
                }
            }
            
        });
        con.end();
        return result;
    }
}
