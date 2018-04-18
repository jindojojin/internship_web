const user = require('../Model/userModel');
module.exports = {
    validate_user: function(req,res){
        var username = req.body.username;
        var password = req.body.password;
        
    },
    change_password: function(req,res){
        var username = req.body.username;
        var old_password = req.body.old_password;
        var new_password = req.body.new_password;
        var check = database
    }
}