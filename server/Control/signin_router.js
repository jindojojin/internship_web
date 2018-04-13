const jsonParser = require('body-parser').json();  // nhận json từ client
module.exports = {
    validate_user: function(req,res){
        var username = req.body.username;
        var password = req.body.password;
        var check= require('../Model/database_controler').isUser(username,password);
        console.log("check: "+check);
        if(check== true){
            res.send("dang nhap thanh cong")
        }

    }
}