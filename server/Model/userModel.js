var database = require('./database_query')
var crypto = require('crypto');
var createSalt = function(){
    return crypto.randomBytes(10).toString('hex');
}
var encrypt = function(str, salt){
    return crypto.pbkdf2Sync(str,salt,1000,64).toString('hex');
}
var compare = function(str,hash,salt){
    return hash == encrypt(str,salt);
}

module.exports = function(username, password){
    this.username = username;
    this.password = password;
    this.isUser = function(){
        
    };
    this.createUser = function(){

    }


};