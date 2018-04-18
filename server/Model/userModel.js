var secure = require('./secure')
var database_query = require('./DatabaseModel/database_query');
var userModel = {
    checkUser: async function (username, password) {
        await database_query.getUser(username)
            .then(res => {
                let salt = res.salt;
                let hash = res.password;
                if(secure.compare(password,hash,salt)){                    
                    let token = secure.createUserToken(res);
                    let user={username:res.username,nickname:res.nickname,usertoken:token};
                    return Promise.resolve(user);
                }else{
                    return Promise.reject(new Error("matkhaukhongdung"))
                }
            })
            .catch(e => {
                return Promise.reject(e);
            }
            )
    }
}
module.exports = userModel;
console.log("ádfsadfasdfasdf");
userModel.checkUser("16021031","16021031").then(res => console.log(res)).catch( e => console.log("xay ra loi"));