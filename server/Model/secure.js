var crypto = require('crypto');
var jwt = require('jsonwebtoken');
const jwtsecure = "messagefromserver";
var secure = {
    createSalt : function(){
        return crypto.randomBytes(10).toString('hex');
    },
    encrypt : function(str, salt){
        return crypto.createHash('md5').update(str+salt).digest('hex');
    },
    compare : function(str,hash,salt){
        return hash == encrypt(str,salt);
    },
    createUserToken: function(user){
        return jwt.sign(user,jwtsecure,{expiresIn : 86400});
    },
    verifyUserToken: function(token){
        return jwt.verify(token,jwtsecure)
    }
}
module.exports = secure;
// var u = {
//     username: "adsfasdfasdf",
//     password: "adfafa",
// }
// // var a=secure.createUserToken(u);
// var b=secure.verifyUserToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkc2Zhc2RmYXNkZiIsInBhc3N3b3JkIjoiYWRmYWZhIiwiaWF0IjoxNTI0MDM4NzQ2LCJleHAiOjE1MjQwNDg3NDZ9.iRX1hY_vtSwRKp-SyUJLqe4r307ftdkvViccD6QbMRU");
// // console.log(a);
// console.log(b);



