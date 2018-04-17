var crypto = require('crypto');
module.exports = {
    createSalt : function(){
        return crypto.randomBytes(10).toString('hex');
    },
    encrypt : function(str, salt){
        return crypto.createHash('md5').update(str+salt).digest('hex');
    },
    compare : function(str,hash,salt){
        return hash == encrypt(str,salt);
    }
}

