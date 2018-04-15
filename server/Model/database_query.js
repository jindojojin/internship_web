var database = require('./database');

var database_query = {
    getUser: async function (username) {
        let myquery ="SELECT * FROM user WHERE username = ?"
        let ret = await new database().query(myquery,[username])
        .then()
        .catch();
        return ret;
    },

    getUserInfor:async function (userID, type) {
        try {
            var con = new database().connect;
            if (type != "student" && type != "admin" && type != "lecturer" && type != "partner") {
                console.log("khong nhan dang duoc kieu user");
                return null;
            }
            con.connect();
            let myquery = "SELECT * FROM"
            let ret = await new Promise((resolve,reject)=>{
                con.query()
            })
            con.end();
            return Promise.resolve(ret);
        } catch (e) {
            return Promise.reject(e);
        }
    },
};

var a = database_query.getUser("16021031");
console.log("a");
console.log(a);

