var secure = require('./secure')
var database_query = require('./DatabaseModel/database_query');
var userModel = {
    checkUser: async function (username, password) {
        try {
            var res = await database_query.getUser(username);
            let salt = res.salt;
            let hash = res.password;
            if (secure.compare(password, hash, salt)) {
                let token = secure.createUserToken(res);
                var user = { username: res.username, nickname: res.nickname, usertoken: token };
                console.log(user);
                return Promise.resolve(user);
            } else {
                return Promise.reject(new Error("mat khau khong dung"));
            }
        } catch (error) {
            return Promise.reject(e);
        }
    }
}
module.exports = userModel;

// var a = async function () {
//     var a = await userModel.checkUser("16021031", "16021031").then(user => console.log(user))
//         .catch(e => console.log(e));
//     console.log("ádfsadfasdfasdf");
// }
// a();
